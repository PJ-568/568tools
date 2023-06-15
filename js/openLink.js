function openLink() {  
    var iframe = document.getElementById("myFrame");
    var iframeSrc = iframe.getAttribute("src");
    var encodedSrc = encodeURIComponent(iframeSrc);

    var link = "/incert/?link=" + encodedSrc;
    window.location.assign(link)
  }