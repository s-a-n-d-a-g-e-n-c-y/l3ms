import React from "react";
import styled from "styled-components";
import DataList from "./dataList";

const Nav = styled(DataList)`
  background: ${(props) => props.theme.primary};
`;

function Navigation() {
  return <Nav />;
}

export default Navigation;
