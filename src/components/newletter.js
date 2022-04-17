import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { supabase } from "api/supabaseClient";
// import { DoDisturbOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";
import { supabase } from "api/supabaseClient";

const SaveButton = styled(Button)`
  margin-top: 20px !important;
  background: rgb(61, 61, 61);
  color: white;
  &:hover {
    color: white;
    background: black;
  }
`;

const getValue = () => {
  return "Start typing in L3ms...";
};

// Figure out how to pass current logged in user id to "user" instead of "hello"

async function writeValue(content, userid) {
  console.log("I'm in async" + userid);
  console.log(content);

  try {
    const { data, error } = await supabase
      .from("newsletters")
      .insert([{ entry: content, user: userid }], { returning: "minimal" });
    if (error) throw new Error(error.message);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Write Value function complete");
  }
}

function Writer() {
  // writer functinos
  console.log(process.env);
  const [session, setSession] = useState(supabase.auth.session() || "");
  const [user, setUser] = useState(session ? session.user : "");
  
  // console.log("session?" + session.user.id);
  // console.log("email?" + user.email);
  // console.log("userid?" + user.id);
  // console.log("supabase?" + supabase.session);

  const initialValue = getValue();
  const [value, setValue] = useState(initialValue ? initialValue : "");

  // useEffect(() => setValue(initialValue ?? ""), [initialValue]);

  console.log("writer value:" + value);

  return (
    <div>
      <Editor
        initialValue={initialValue}
        value={value}
        // onSaveContent={(newValue, editor) => setValue(newValue)}
        onEditorChange={(newValue, editor) => setValue(newValue)}
      />
      <SaveButton onClick={() => writeValue(value, user.id)}>Save</SaveButton>
    </div>
  );
}
export default Writer;

// Notes:
//// save a new entry to the api
//// set initial newsletter value from api (load a single newsletter)
//// check permissions & secure entries or edits from non-owners
////
