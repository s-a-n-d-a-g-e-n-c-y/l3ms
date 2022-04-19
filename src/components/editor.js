import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Editor } from "@tinymce/tinymce-react";
import { supabase } from "api/supabaseClient";
import { Button } from "@mui/material";

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
  const [session, setSession] = useState(supabase.auth.session() || "");
  const [user, setUser] = useState(session ? session.user : "");
  const [value, setValue] = useState("");
  
  // console.log("session?" + session.user.id);
  // console.log("email?" + user.email);
  // console.log("userid?" + user.id);
  // console.log("supabase?" + supabase.session);

  const initialValue = getValue();
  console.log("writer value:" + value);
  // useEffect(() => setValue(initialValue ?? ""), [initialValue]);


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