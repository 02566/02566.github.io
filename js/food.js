//图片向左走
//使用div时，请保证colee_left_2与colee_left_1是在同一行上.
var speed = 10;//速度数值越大速度越慢,毫秒计
var colee_left_2 = document.getElementById("colee_left_2");
var colee_left_1 = document.getElementById("colee_left_1");
var colee_left = document.getElementById("colee_left");
colee_left_2.innerHTML = colee_left_1.innerHTML;

function repeatLeft() {
  if(colee_left_1.offsetWidth - colee_left.scrollLeft <= 0) {//offsetWidth 是对象的可见宽度
    colee_left.scrollLeft -= colee_left_1.offsetWidth;//scrollWidth 是对象的实际内容的宽，不包边线宽度
  } else {
    colee_left.scrollLeft++;
  }
}
var repeatLeftInterval=setInterval (repeatLeft,speed);

colee_left.onmouseover=function() {
  clearInterval(repeatLeftInterval);
}
colee_left.onmouseout=function() {
  repeatLeftInterval = setInterval(repeatLeft,speed);
}

//图片向右走
var speed = 10;//速度数值越大速度越慢,毫秒计
var colee_right_2 = document.getElementById("colee_right_2");
var colee_right_1 = document.getElementById("colee_right_1");
var colee_right = document.getElementById("colee_right");
colee_right_2.innerHTML = colee_right_1.innerHTML;

function repeatRight(){
  if(colee_right.scrollLeft <= 0)//offsetWidth 是对象的可见宽度
  colee_right.scrollLeft += colee_right_2.offsetWidth;//scrollWidth 是对象的实际内容的宽，不包边线宽度
  else{
  colee_right.scrollLeft--;
  }
}
var repeatRightInterval=setInterval(repeatRight,speed);

colee_right.onmouseover=function() {
  clearInterval(repeatRightInterval);
}
colee_right.onmouseout=function() {
  repeatRightInterval=setInterval(repeatRight,speed);
}
