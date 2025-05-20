import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F14A16",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#000",
      secondary: "#FC9918",
      third:""
    }
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
