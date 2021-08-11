import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Favicon from "react-favicon";
import nyan from "./vendor/nyan";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <main className="App" data-testid="App">
      <Favicon url={nyan} />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
