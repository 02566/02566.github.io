    var min = document.querySelector(".min"),
    var max = document.querySelector(".max"),
    var maxImg = document.querySelector(".max img"),
    var magnify = document.querySelector(".magnify");

 min.onmouseover = function(){
        //鼠标覆盖显示max和fd
        max.style.display = "block";
        magnify.style.display = "block";
    }
        //离开时隐藏
        min.onmouseout= function(){
        max.style.display = "none";
        magnify.style.display = "none";
        }
        //fd的移动范围
        min.onmousemove = function(){
            //鼠标触摸的点
            var x = event.clientX-min.offsetLeft-magnify.offsetWidth/2;
            var y = event.clientY-min.offsetTop-magnify.offsetHeight/2;
            //最大移动距离
            var maxX = min.clientWidth-magnify.offsetWidth;
            var maxY = min.clientHeight-magnify.offsetHeight;
            //边界判断
            if(x<=0){
                x=0;
            }else if(x>=maxX){
                x=maxX;
            }
            if(y<=0){
                y=0;
            }else if(y>=maxY){
                y=maxY;
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