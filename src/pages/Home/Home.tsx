import React from "react";
import Footer from "../../components/Footer/Footer";
import HeroButton from "../../components/HeroButton/HeroButton";
import HeroCat from "../../components/HeroCat/HeroCat";
import Matrix from "../../components/Matrix/Matrix";
import "./Home.scss";

const Home: React.FunctionComponent = (): JSX.Element => (
  <div className="Home" data-testid="Home">
    <Matrix />
    <HeroCat />
    <HeroButton />
    <Footer />
  </div>
);

export default Home;
