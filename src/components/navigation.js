import React from "react";
import styled from "styled-components";
import DataList from "./dataList";
import Auth from "api/auth";
import { supabase } from "api/supabaseClient";

const Nav = styled.div`
  background: ${(props) => props.theme.primary};
`;

function Navigation() {
  const session = supabase.auth.session();
  // console.log("User = " + session?.user.email);

  return (
    <Nav>
      {session ? (
        <div>
          ello {session.user.email}
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
