import { createTheme } from "@material-ui/core/styles";
import "./App.scss";
// import "_app.scss";

let theme = createTheme();

theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(", "),
    htmlFontSize: 16,
    h1: {
      fontFamily: ["Rubik"].join(", "),
      "@media (max-width:768px)": {
        fontSize: "calc((0.75vh+1vw)*10)",
      },
    },
    h2: {
      fontFamily: ["Rubik"].join(", "),
      "@media (max-width:768px)": {
        fontSize: "calc((0.75vh+1vw)*8.33)",
      },
    },
    body1: {},
  },
});

export default theme;
