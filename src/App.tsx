import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Favicon from "react-favicon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Playground from "./pages/Playground/Playground";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Typography from "./pages/Typography/Typography";
import theme from "./styles/Theme";
import nyan from "./vendor/nyan";

declare global {
  interface Window {
    stopMatrix: boolean;
  }
}

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
            <Route path="/typography">
              <Typography />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/terms">
              <Terms />
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

// Todo catch route errors
