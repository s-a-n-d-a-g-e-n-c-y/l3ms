import React from "react";

function DataList(props) {
  if (!props.data) {
    return null;
  }

  const data = props.data;
  const items = data.map((item) => <li key={item}>{item}</li>);

  return <ul>{data ? items : <span>nothing to show</span>}</ul>;
}

export default DataList;