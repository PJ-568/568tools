function includeHTML(){for(var e=document.getElementsByTagName("include"),t=0;t<e.length;t++){var n=e[t],a=n.getAttribute("src");if(a){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===this.readyState&&200===this.status){n.innerHTML=this.responseText;for(var e=n.getElementsByTagName("script"),t=0;t<e.length;t++){var a=document.createElement("script");a.innerHTML=e[t].innerHTML,document.body.appendChild(a)}}},r.open("GET",a,!0),r.send()}}}document.addEventListener("DOMContentLoaded",includeHTML);
