import React, { useEffect } from "react";
import "./Matrix.scss";

const Matrix: React.FunctionComponent = (): JSX.Element => {
  useEffect(() => {
    require("../../vendor/matrix");
  });

  // const vw = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );
  // console.log("🚀 ~ file: App.tsx ~ line 13 ~ vw", vw);

  // const vh = Math.max(
  //   document.documentElement.clientHeight || 0,
  //   window.innerHeight || 0
  // );
  // console.log("🚀 ~ file: App.tsx ~ line 19 ~ vh", vh);

  // const textStrip = [
  //   "日",
  //   "ﾊ",
  //   "ﾐ",
  //   "ﾋ",
  //   "ｰ",
  //   "ｳ",
  //   "ｼ",
  //   "ﾅ",
  //   "ﾓ",
  //   "ﾆ",
  //   "ｻ",
  //   "ﾜ",
  //   "ﾂ",
  //   "ｵ",
  //   "ﾘ",
  //   "ｱ",
  //   "ﾎ",
  //   "ﾃ",
  //   "ﾏ",
  //   "ｹ",
  //   "ﾒ",
  //   "ｴ",
  //   "ｶ",
  //   "ｷ",
  //   "ﾑ",
  //   "ﾕ",
  //   "ﾗ",
  //   "ｾ",
  //   "ﾈ",
  //   "ｽ",
  //   "ﾀ",
  //   "ﾇ",
  //   "ﾍ",
  // ];
  // console.log("🚀 ~ file: App.tsx ~ line 56 ~ textStrip", textStrip);

  // const placeholder = document.getElementById("matrix-placeholder");
  // const canvas = document.createElement("canvas");

  // if (placeholder) placeholder.appendChild(canvas);

  // const context = canvas.getContext("2d");

  // if (context) context.globalCompositeOperation = "lighter";

  // canvas.width = vw;
  // canvas.height = vh;

  return (
    <div className="Matrix" data-testid="Matrix" id="matrix-placeholder"></div>
  );
};

export default Matrix;
