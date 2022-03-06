import React from "react";
import styled from "styled-components";

const ListofData = styled.div`
  margin: 0px;
  padding: 20px;
`;

function DataList(props) {
  // reminder, the below does not work if props.data is not defined.
  // const data = props.data;

  // instead we check if data is passed in & otherwise set data to null.
  // and then map items from data to li tags.
  const data = props.data ? props.data : null;
  const items = data?.map((item) => <span key={item}>{item}</span>);

  // return list if items is populated, otherwise return span.
  return <ListofData>{data ? items : <span>nothing to show</span>}</ListofData>;
}

export default DataList;
