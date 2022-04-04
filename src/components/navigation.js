import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataList from "./dataList";
import Auth from "api/auth";
import { supabase } from "api/supabaseClient";

const Nav = styled.div`
  background: ${(props) => props.theme.primary};
`;

function Navigation() {
  const [session, setSession] = useState("");
  const [user, setUser] = useState(session?.user);
 
  // Q: Why does this loop? Why don't we just stop it?
  // supabase.auth.onAuthStateChange(( session) => {
  //   setSession(session);
  //   console.log(session);
  // });

  useEffect(() => {
    const session = supabase.auth.session();

    setSession(session);
    setUser(session?.user ?? null);

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
          ello {session.user.username}{user}
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
