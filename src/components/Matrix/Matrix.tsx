import React, { useEffect } from "react";
import startRaining from "../../vendor/matrix";
import "./Matrix.scss";

const Matrix: React.FunctionComponent = (): JSX.Element => {
  useEffect(() => {
    window.stopMatrix = false;

    const vw = Math.max(
      // document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    const vh = Math.max(
      // document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    startRaining(vw, vh);
  });
  return <canvas data-testid="Matrix" id="matrix"></canvas>;
};

export default Matrix;
