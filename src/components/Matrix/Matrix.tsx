import React, { useEffect } from "react";
import "./Matrix.scss";
import startRaining from "../../vendor/matrix";

const Matrix: React.FunctionComponent = (): JSX.Element => {
  useEffect(() => {
    startRaining();
  });
  return (
    <div className="Matrix" data-testid="Matrix" id="matrix-placeholder"></div>
  );
};

export default Matrix;
