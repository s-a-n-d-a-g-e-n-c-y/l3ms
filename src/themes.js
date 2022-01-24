import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
  typography: {
    h2: {
      color: orange,
      size: "24px",
    },
  },
});

export default theme;
