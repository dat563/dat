// var canvas = document.querySelector("#myCanvas");
// const colors = document.querySelector("ul");
const del = document.querySelector("button");
// const arr = [...colors.children];
// arr.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     ctx.fillStyle = item.dataset.value;
//   });
// });
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "black";
// // ctx.beginPath();
// // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// // ctx.stroke();
// canvas.addEventListener("mouseup", function (e) {
//   var circle = new Path2D();
//   circle.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI);
//   ctx.fill(circle);
// });

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myCanvas = document.getElementById("myCanvas");
const context = myCanvas.getContext("2d");
context.strokeStyle = "black";
const colors = document.querySelector("ul");

const arr = [...colors.children];
arr.forEach((item) => {
  item.addEventListener("click", (e) => {
    context.strokeStyle = item.dataset.value;
  });
});

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myCanvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myCanvas.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

del.addEventListener("click", () => {
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
});
