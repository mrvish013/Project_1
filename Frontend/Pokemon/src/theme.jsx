import { Height } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const baseOverride = {
  MuiButton: {
    styleOverrides: {
      root: {
        width: 140,
        fontWeight: 600,
        fontSize: "12px",
        wordSpacing: 0,
        borderRadius: 40,
        padding: "10px 20px",
        textTransform: "none",
      },
      containedPrimary: {
        color: "#fff",
        border: "2px solid #F14A16",
        "&:hover": {
          color: "#F14A16",
          backgroundColor: "transparent",
        },
      },
      outlinedPrimary: {
        borderWidth: "2px",
        borderColor: "#F14A16",
        color: "#F14A16",
        "&:hover": {
          backgroundColor: "#F14A16",
          borderColor: "#F14A16",
          color: "#fff",
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F14A16",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#000",
      secondary: "#FC9918",
      offer: "#370665"
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
  components: {
    ...baseOverride,
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 350,
          padding: 16,
          fontWeight: "100",
          borderRadius: 16,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          background: "black",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F14A16",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#121212",
      paper: "black",
    },
    text: {
      primary: "#fff",
      secondary: "#FC9f18",
      offer: "#fff"
    },
    backgroundColor: {
      default: 'linear-gradient(to bottom, #FFFFFFB2, #FFFFFF1A)'
    }
  },
  typography: {
    fontFamily: "sans-serif",
  },
  components: {
    ...baseOverride,
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 350,
          padding: 16,
          fontWeight: "100",
          borderRadius: 16,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          background: "linear-gradient(to bottom, #FFFFFFB2, #FFFFFF1A)",
        },
      },
    },
  },
});
