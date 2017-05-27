var book = document.getElementById('book');
var front = document.getElementsByClassName('front');
var back = document.getElementsByClassName('back');
var count_front = front.length-1;
var count_back = back.length-1;

book.onclick=function turnPage(){
  if (!document.getElementById) return false;
  if (!document.getElementsByClassName) return false;
  if (count_front < 0)  return;
  front[count_front].style.transform = 'rotateY(-160deg)';
  back[count_back].style.transform = 'rotateY(20deg)';
    if(count_back < back.length-1) {
    cout_hidden = count_back+1;
    hiddenBack();
  }
  count_front--;
  count_back--;
}

function hiddenBack() {
  setTimeout("back[cout_hidden].style.zIndex = '-1'",500);
}



//不对
/*function turnFirst() {
  var i = front.length-1;
  var i = back.length-1;
  for (; i > 1; i--) {
  front[i].style.transform='rotateY(160deg)';
  back[j].style.transform='rotateY(-20deg)';
}*/

var min = document.querySelector(".min");
var max = document.querySelector(".max");
var maxImg = document.querySelector(".max img");
var magnify = document.querySelector(".magnify");
var pageEight = document.querySelector(".page_eight");
var pages = document.getElementById('pages');
var minImg = document.querySelector(".min img");

min.onmouseover = function(){
  if (!document.getElementById) return false;
  if (!document.querySelector) return false;
  //鼠标覆盖显示max和fd
  max.style.display = "block";
  magnify.style.display = "block";
}

min.onmouseout= function(){
  if (!document.getElementById) return false;
  if (!document.querySelector) return false;
  //离开时隐藏
  max.style.display = "none";
  magnify.style.display = "none";
}
//fd的移动范围
min.onmousemove = function(){
  if (!document.getElementById) return false;
  if (!document.querySelector) return false;
  //鼠标触摸的点
  var x = event.clientX-book.offsetLeft-min.offsetLeft-magnify.offsetWidth/2;
  var y = event.clientY-book.offsetTop-min.offsetTop-pages.offsetTop-magnify.offsetHeight/2;
  //最大移动距离
  var maxX = min.clientWidth-magnify.offsetWidth;
  var maxY = min.clientHeight-magnify.offsetHeight;
  //边界判断
  if(x<=0){
    x=0;
  }else if(x>=maxX){
    x=maxX;
  }
  if(y<(-pages.offsetTop)){
    y=(-pages.offsetTop);
  }else if(y>=maxY-pages.offsetTop){
    y=maxY-pages.offsetTop;
  }
  //fd的位置
  magnify.style.left = x+"px";
  magnify.style.top = y+"px";
  //移动比例
  var yidongX = x/maxX;
  var yidongY = y/maxY;
  //移动
  maxImg.style.left = yidongX * (max.clientWidth - maxImg.offsetWidth) + "px";
  maxImg.style.top = yidongY * (max.clientHeight - maxImg.offsetHeight) + "px";
}