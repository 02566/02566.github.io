//添加加载函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if(typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

//在目标元素后添加
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

//添加展示首图片
function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('imagegallery')) return false;
  var placeholder = document.createElement('img');
  placeholder.setAttribute('id','placeholder');
  placeholder.setAttribute('src','./images/imagegaller.png')
  placeholder.setAttribute('alt','The imagegallery.');
  var description = document.createElement('p');
  description.setAttribute('id','description');
  var descripText = document.createTextNode('请选择一张图片...');
  description.appendChild(descripText);
  var gallery = document.getElementById('imagegallery');
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
}

//点击运行showPic函数
function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById('imagegallery');
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length-1 ; i++) {
    links[i].onclick = function() {
      showPic(this);
      return false;
    }
  }
}

//将id为placeholder的图片来源改为要查看的图片
//并把图片的title文字显示在图片下方
function showPic(whichpic) {
  if (!document.getElementById('placeholder')) return false;
  var source = whichpic.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src',source);
  if (document.getElementById('description')) {
    var text = whichpic.getAttribute('title');   
  } else {
    var text = 'a';
  }
  var description = document.getElementById('description');
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
}


addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);