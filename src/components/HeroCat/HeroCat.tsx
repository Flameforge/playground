import React from "react";
import "./HeroCat.scss";

const HeroCat: React.FunctionComponent = (): JSX.Element => (
  <div data-testid="HeroCat" id="hero-unit">
    <div className="cat">
      <div className="ear ear--left"></div>
      <div className="ear ear--right"></div>
      <div className="face">
        <div className="eye eye--left">
          <div className="eye-pupil"></div>
        </div>
        <div className="eye eye--right">
          <div className="eye-pupil"></div>
        </div>
        <div className="muzzle"></div>
      </div>
    </div>
  </div>
);
export default HeroCat;
