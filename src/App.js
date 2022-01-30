import "./App.css";
import React from 'react';
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";

//absolute pathnames, see jsconfig.json
import DataList from "components/dataList";

//theme can use themeprovider
const PrimaryColor = grey[200];
const SecondaryColor = grey[300];

const Platform = styled(Box)`
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Main = styled(Box)`
  background: ${PrimaryColor};
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Secondary = styled(Main)`
  flex-grow: 1;
`;

const Containers = styled(Container)`
  background: ${SecondaryColor};
  height: 100%;
  overflow-y: auto;
`;

//ex. this can come from an API
const datasource = [1, 2, 3, 4, 5];

function App() {
  return (
    <Platform>
      <Main>
        <DataList data={datasource} />
        <Containers children={<DataList data={datasource} />} />
      </Main>
      <Secondary>
        <DataList data={datasource} />
        <Containers className="containers" children={<DataList data={datasource} />} />
      </Secondary>
    </Platform>
  );
}

export default App;
