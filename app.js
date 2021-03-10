var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var halfOfCanvasWidth = canvasWidth / 2;
var halfOfCanvasHeight = canvasHeight / 2;

context.beginPath();
context.moveTo(halfOfCanvasWidth, canvasHeight - canvasHeight);
context.lineTo(halfOfCanvasWidth, canvasHeight);
context.strokeStyle = 'green';
context.stroke();

context.beginPath();
context.moveTo(canvasWidth - canvasWidth, halfOfCanvasHeight);
context.lineTo(canvasWidth, halfOfCanvasHeight);
context.strokeStyle = 'red';
context.stroke();