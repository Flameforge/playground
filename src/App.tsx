import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import Matrix from "./components/Matrix/Matrix";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="App">
      <Matrix></Matrix>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Hero></Hero>

        <p>Welcome to the Cat's Playground</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
};

export default App;
