var color = "Red";
var line_width = "2";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouseEvent = "";

canvas.addEventListener("mousedown", my_Mousedown);
function my_Mousedown(e){
    color = document.getElementById("colortextInput").value;
    line_width = document.getElementById("widthtextInput").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_Mouseup);
function my_Mouseup(){
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", my_Mousedisappear);
function my_Mousedisappear(){
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", my_Mousemove);
function my_Mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates = " + current_position_of_mouse_x + " and " + current_position_of_mouse_y);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = line_width;
  ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
  ctx.stroke();
}
last_position_of_mouse_x = current_position_of_mouse_x;
last_position_of_mouse_y = current_position_of_mouse_y;
}
function button_Erase(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

var touchEvent ="";
var lastX, lastY;
var width = screen.width;
var new_width = screen.width - 70;
var height = screen.height;
var new_height = screen.height - 300;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
if (width < 992){
    document.getElementById("myCanvas").height = new_height;
    document.getElementById("myCanvas").width = new_width;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touch_start);
function my_touch_start(z){
    last_position_of_x = z.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = z.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touch_move);
function my_touch_move(x){
    current_position_of_x = x.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = x.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}