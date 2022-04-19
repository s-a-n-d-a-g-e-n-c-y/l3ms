import React, { useState, useEffect } from "react";
import { supabase } from "api/supabaseClient";

import styled from "styled-components";

// get newsletters belonging to current user
// get session for current user

async function getNewsletters(userid) {
  try {
    let { data: newsletters, error } = await supabase
      .from('newsletters')
      .select("*")
      .eq('user', userid);
    console.log(newsletters);
    if (error) throw new Error(error.message);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Retreive newsletters function complete");
  }
}

function Newsletters() {
  const [session, setSession] = useState(supabase.auth.session() || "");
  const [user, setUser] = useState(session ? session.user : "");
  const [posts, setPosts] = useState([]);

  const newsletterList = getNewsletters(user.id);
  console.log(newsletterList);

  return (
    <ul>
      nothing
      {/* {data.map((newsletterList) => (
        <li key={newsletterList.id}>{newsletterList.entry}</li>
      ))} */}
    </ul>
  );
}

export default Newsletters;
