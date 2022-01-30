import React from "react";
import styled from "styled-components";

const ListofData = styled.ul`
  margin: 0px;
  padding: 20px;
`;

function DataList(props) {

  // this does not work if props.data is not defined.
  // const data = props.data;

  // instead we check if data is passed in & otherwise set data to null.
  const data = props.data ? props.data : null;

  // map items from data to li tags.
  const items = data?.map((item) => <li key={item}>{item}</li>);

  // return list if items is populated, otherwise return span.
  return <ListofData>{data ? items : <span>nothing to show</span>}</ListofData>;
}

export default DataList;