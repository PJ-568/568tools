function getUrlParameter(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function replaceIframeSource(){var e=getUrlParameter("link");if(e){var n=document.getElementById("myIframe");n.src=e,n.scrollIntoView({behavior:"smooth"}),n.addEventListener("load",(function(){var e=n.contentDocument.title;document.getElementById("dynamicTitle").innerHTML="568Tools | "+e}))}}window.onload=function(){replaceIframeSource()};
