import React from "react";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import Matrix from "./components/Matrix/Matrix";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <main className="App">
      <Matrix></Matrix>
      <Hero></Hero>
    </main>
  );
};

export default App;
