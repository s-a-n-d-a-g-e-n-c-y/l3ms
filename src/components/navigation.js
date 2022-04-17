import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataList from "./dataList";
import Auth from "api/auth";
import { supabase } from "api/supabaseClient";
// import { setupSession } from "./api";

const Nav = styled.div`
  background: ${(props) => props.theme.primary};
`;

function Navigation() {
  const [session, setSession] = useState("");
  const [user, setUser] = useState(session ? session.user : "");
  
  // console.log(user.email);
  // console.log(user.id);
  // how can I import this useEffect below as a function instead?
  // make the API call, return the data, and set the session here?
  // setupSession;

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    // why data: authListener?
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <Nav>
      {session ? (
        <div>
          ello {user.email}
          <button
            onClick={(e) => {
              e.preventDefault();
              supabase.auth.signOut();
            }}
          >
            Signout
          </button>
        </div>
      ) : (
        <Auth />
      )}

      <DataList />
    </Nav>
  );
}

export default Navigation;
