import React from "react";
import "./App.scss";

import Favicon from "react-favicon";
import nyan from "./vendor/nyan";

import Hero from "./components/Hero/Hero";
import Matrix from "./components/Matrix/Matrix";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <main className="App">
      <Favicon url={nyan} />
      <Matrix />
      <Hero />
    </main>
  );
};

export default App;
