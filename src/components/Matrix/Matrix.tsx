import React, { useEffect } from "react";
import "./Matrix.scss";

const Matrix: React.FunctionComponent = (): JSX.Element => {
  useEffect(() => {
    require("../../vendor/matrix");
  });

  return (
    <div className="Matrix" data-testid="Matrix" id="matrix-placeholder"></div>
  );
};

export default Matrix;
