function openLink () {  
  var iframe = document.getElementById("myFrame");
  var iframeSrc = iframe.getAttribute("src");
  encode_and_open (iframeSrc)
}
function openBtnLink () {  
  var a = document.closest ('a');
  var aSrc = a.getAttribute ("src");
  
  var encodedaSrc = encodeURIComponent (aSrc);
  var url = "/incert/?link=" + encodedaSrc;
  document.querySelector('#myFrame').src = url;
  document.querySelector('#myFrame').scrollIntoView({ behavior: 'smooth' });
}
function encode_and_open (event) {
  var encodedSrc = encodeURIComponent (event);
  var link = "/incert/?link=" + encodedSrc;
  window.location.assign (link)
}