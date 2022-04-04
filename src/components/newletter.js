import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { supabase } from "api/supabaseClient";

function Writer() {
  const initialValue = "ello";
  // const [session, setSession] = useState("");
  const [value, setValue] = useState(initialValue ?? '');
  useEffect(() => setValue(initialValue ?? ''), [initialValue]);

  console.log(value);

  return (
    <div>
      <Editor
        initialValue={initialValue}
        value={value}
        // onSaveContent={(newValue, editor) => setValue(newValue)}
        onEditorChange={(newValue, editor) => setValue(newValue)}
      />
    </div>
  );
}
export default Writer;
