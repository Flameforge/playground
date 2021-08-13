import React from "react";
import Hero from "../../components/Hero/Hero";
import Matrix from "../../components/Matrix/Matrix";

import "./Home.scss";
import HeroButton from "../../components/HeroButton/HeroButton";
import Footer from "../../components/Footer/Footer";

const Home: React.FunctionComponent = (): JSX.Element => (
  <div className="Home" data-testid="Home">
    <Matrix />
    <Hero />
    <HeroButton />
    <Footer />
  </div>
);

export default Home;
