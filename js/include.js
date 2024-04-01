function includeHTML() {
  var elements = document.getElementsByTagName("include");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var file = element.getAttribute("src");
    if (file) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          element.innerHTML = this.responseText;
          // 执行加载的JavaScript代码
          var scripts = element.getElementsByTagName("script");
          for (var j = 0; j < scripts.length; j++) {
            var script = document.createElement("script");
            script.innerHTML = scripts[j].innerHTML;
            document.body.appendChild(script);
          }
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);