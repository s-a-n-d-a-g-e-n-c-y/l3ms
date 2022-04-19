import "./App.css";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";

//absolute pathnames, see jsconfig.json
import DataList from "components/dataList";
import Navigation from "components/navigation";
import Writer from "components/editor";
import Newsletters from "components/newletters";

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
  padding: 20px;
  height: 100%;
  overflow-y: auto;
`;

//ex. this can come from an API
const datasource = [1, 2, 3, 4, 5];
const mockdata = ["one", "two", "three", "four", "five"];

// function to call DataList component with data prop. Returns mockdata if data is missing
const LoadedList = ({ data, ...props }) => (
  <DataList data={data || mockdata} {...props} />
);

function App() {
  return (
    <Platform>
      <Navigation />
      <Main>
        <LoadedList />
        <LoadedList data={datasource} />
        <Containers>
          <Newsletters />
          <Writer />
        </Containers>
      </Main>
      <Secondary>
        <DataList />
        <DataList data={null} />
        <DataList data={""} />
        <Containers>
          <DataList datal={datasource} />
        </Containers>
      </Secondary>
    </Platform>
  );
}

export default App;
