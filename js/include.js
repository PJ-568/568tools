function includeHTML() {
  var elements = document.getElementsByTagName("include");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var file = element.getAttribute("src");
    if (file) {
      (function(element) { // 创建一个函数作用域，以便保存每个元素的引用
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            element.innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
      })(element);
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
