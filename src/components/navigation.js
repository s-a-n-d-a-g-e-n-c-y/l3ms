import React from "react";
import styled from "styled-components";
import DataList from "./dataList";
import Auth from "api/auth";

const Nav = styled.div`
  background: ${(props) => props.theme.primary};
`;

function Navigation() {
  return (
    <Nav>
      <Auth />
      <DataList />
    </Nav>
  );
}

export default Navigation;
