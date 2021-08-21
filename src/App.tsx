import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Favicon from "react-favicon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Playground from "./pages/Playground/Playground";
import Privacy from "./pages/Privacy/Privacy";
import "./styles/App.scss";
import nyan from "./vendor/nyan";

let theme = createTheme();

theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(", "),
    htmlFontSize: 16,
    h1: {
      fontFamily: ["Rubik"].join(", "),
      "@media (max-width:768px)": {
        fontSize: "calc((1vh+1vw)*10)",
      },
    },
    h2: {
      fontFamily: ["Rubik"].join(", "),
      "@media (max-width:768px)": {
        fontSize: "calc((1vh+1vw)*8.33)",
      },
    },
    body1: {},
  },
});

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <main className="App" data-testid="App">
        <Favicon url={nyan} />
        <Router>
          <Switch>
            <Route path="/playground">
              <Playground />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  );
};

export default App;
