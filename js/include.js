function includeHTML(){for(var e=document.getElementsByTagName("include"),t=0;t<e.length;t++){var n=e[t],a=n.getAttribute("src");a&&function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&(e.innerHTML=this.responseText)},t.open("GET",a,!0),t.send()}(n)}}document.addEventListener("DOMContentLoaded",includeHTML);
