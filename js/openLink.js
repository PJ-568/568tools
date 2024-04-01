function openLink () {  
  var iframe = document.getElementById("myIframe");
  var iframeSrc = iframe.getAttribute("src");
  encode_and_open (iframeSrc)
}
function encode_and_open (event) {
  var encodedSrc = encodeURIComponent (event);
  var link = "/incert/?link=" + encodedSrc;
  window.location.assign (link)
}