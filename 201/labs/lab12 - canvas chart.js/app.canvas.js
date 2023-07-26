'use strict';
// this example uses <canvas> defaults
let canvasElement = document.getElementById('canvas-element');

let context = canvasElement.getContext('2d');

function createX (width) {
  context.moveTo(0, 0);
  context.lineTo(width, width)

  context.moveTo(width, 0);
  context.lineTo(0, width)
  // context.stroke(); // only need this once
}

createX(500);

context.rect(10, 100, 200, 100);
context.stroke();