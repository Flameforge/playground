import React from "react";
import Favicon from "react-favicon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Playground from "./pages/Playground/Playground";
import Privacy from "./pages/Privacy/Privacy";
import nyan from "./vendor/nyan";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <main className="App" data-testid="App">
      <Favicon url={nyan} />
      <Router>
        <Switch>
          <Route path="/playground">
            <Playground />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>{" "}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
