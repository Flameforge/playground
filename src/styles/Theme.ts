import { createTheme } from "@material-ui/core/styles";
import "./App.scss";

let theme = createTheme();

theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(", "),
    htmlFontSize: 16,
    h1: {
      fontFamily: ["Rubik"].join(", "),
    },
    h2: {
      fontFamily: ["Rubik"].join(", "),
    },
    h3: {
      fontFamily: ["Rubik"].join(", "),
    },
    h4: {
      fontFamily: ["Rubik"].join(", "),
    },
    h5: {
      fontFamily: ["Rubik"].join(", "),
    },
    h6: {
      fontFamily: ["Rubik"].join(", "),
    },
  },
});

export default theme;

// "@media (max-width:768px)": {
//   fontSize: "2rem",
// },
