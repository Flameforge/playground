import React from "react";
import Hero from "../../components/Hero/Hero";
import Matrix from "../../components/Matrix/Matrix";
import "./Home.scss";

const Home: React.FunctionComponent = (): JSX.Element => (
  <div className="Home" data-testid="Home">
    <Matrix />
    <Hero />
  </div>
);

export default Home;
