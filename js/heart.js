var c=4;
var t;
var heart1 = document.querySelector('.big-heart-2');
var heart2 = document.querySelector('.big-heart-1');
var divTxt = document.getElementById('txt');
var pTxt = document.getElementsByTagName('p');

function timedCount() {
  c=c-1;
  heart1.style.display = 'none';
  heart2.style.display = 'none';
  document.getElementById('txt').innerHTML=c;
  t=setTimeout('timedCount()',1000)
  if (c==0) {
    // window.open('./book.html');
    location.replace('./book.html')
  }
}

divTxt.onmouseover = function () {
  heart1.style.left = '33%'
  heart1.style.top = '60%';
  heart2.style.left = '58%';
  heart2.style.top = '60%';
  //pTxt[0].style.backgroundColor = "#F07D7E"
  pTxt[0].style.color = '#F07D7E';
  pTxt[0].innerHTML = '点我吖~';
}

divTxt.onmouseout = function () {
  heart1.style.left = '43%';
  heart1.style.top = '65%';
  heart2.style.left = '47%';
  heart2.style.top = '65%';
  pTxt[0].style.color = '#ffffff';
  pTxt[0].innerHTML = '点点点！';
}