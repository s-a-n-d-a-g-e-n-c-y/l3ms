import React from "react";
import styled from "styled-components";

const ListofData = styled.ul`
  margin: 0px;
  padding: 20px;
`;

function DataList(props) {
  if (!props.data) {
    return null;
    
  }

  const data = props.data;
  const items = data.map((item) => <li key={item}>{item}</li>);

  return <ListofData>{data ? items : <span>nothing to show</span>}</ListofData>;
}

export default DataList;