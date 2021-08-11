/* eslint-disable @typescript-eslint/no-unused-vars */
var canvas = document
    .getElementById("matrix-placeholder")
    .appendChild(document.createElement("canvas")),
  context = canvas.getContext("2d");
context.globalCompositeOperation = "lighter";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

canvas.width = vw;
canvas.height = vh;
draw();

var textStrip = [
  "日",
  "ﾊ",
  "ﾐ",
  "ﾋ",
  "ｰ",
  "ｳ",
  "ｼ",
  "ﾅ",
  "ﾓ",
  "ﾆ",
  "ｻ",
  "ﾜ",
  "ﾂ",
  "ｵ",
  "ﾘ",
  "ｱ",
  "ﾎ",
  "ﾃ",
  "ﾏ",
  "ｹ",
  "ﾒ",
  "ｴ",
  "ｶ",
  "ｷ",
  "ﾑ",
  "ﾕ",
  "ﾗ",
  "ｾ",
  "ﾈ",
  "ｽ",
  "ﾀ",
  "ﾇ",
  "ﾍ",
];

var stripCount = vw / 10,
  stripX = [],
  stripY = [],
  dY = [],
  stripFontSize = [];

const fontSize = (vw) => Math.floor(Math.random() * 32) + vw / 120;

for (var i = 0; i < stripCount; i++) {
  stripX[i] = Math.floor(Math.random() * vw);
  stripY[i] = -100;
  dY[i] = Math.floor(Math.random() * 7) + 3;
  stripFontSize[i] = fontSize(vw);
}

// var theColors = ["#fff", "#81ec72", "#5cd646", "#54d13c", "#4ccc32", "#43c728"];
var theColors = [
  "#cefbe4",
  "#81ec72",
  "#4c9e3e",
  "#3c912a",
  "#16400d",
  "#16400d",
];

var elem, context, timer;

function drawStrip(x, y) {
  for (var k = 0; k <= 20; k++) {
    var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
    if (context.fillText) {
      switch (k) {
        case 0:
          context.fillStyle = theColors[0];
          break;
        case 1:
          context.fillStyle = theColors[1];
          break;
        case 3:
          context.fillStyle = theColors[2];
          break;
        case 7:
          context.fillStyle = theColors[3];
          break;
        case 13:
          context.fillStyle = theColors[4];
          break;
        case 17:
          context.fillStyle = theColors[5];
          break;
      }
      context.fillText(randChar, x, y);
    }
    y -= stripFontSize[k];
  }
}

function draw() {
  // clear the canvas and set the properties
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.shadowOffsetX = context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#94f475";

  for (var j = 0; j < stripCount; j++) {
    context.font = stripFontSize[j] + "px MatrixCode";
    context.textBaseline = "top";
    context.textAlign = "center";

    if (stripY[j] > 1358) {
      stripX[j] = Math.floor(Math.random() * canvas.width);
      stripY[j] = -100;
      dY[j] = Math.floor(Math.random() * 7) + 3;
      stripFontSize[i] = fontSize(vw);
      drawStrip(stripX[j], stripY[j]);
    } else drawStrip(stripX[j], stripY[j]);

    stripY[j] += dY[j];
  }
  setTimeout(draw, 50);
}
