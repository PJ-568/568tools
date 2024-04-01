// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const position = document.getElementById('loading');

document.onreadystatechange=function () {
    if (window.location.href.indexOf("print.html") === -1) {
        position.style.display = 'block';
        if (document.readyState=="complete"){
            loadingFade();
        }
    } else {
        position.style.display = 'none';
    }
}

function startLoading() {
    var loadingBackground=document.getElementById('loading_bg');
    position.style.display = 'block';
    loadingBackground.style.opacity=1;
    setTimeout(() => loadingFade(), 30000)
}

function loadingFade() {
    var opacity=1;
    //  var loadingPage=document.getElementById('loading');
    var loadingBackground=document.getElementById('loading_bg');
    var time=setInterval(function () {
        if (opacity<=0){
            clearInterval(time);
            //  loadingPage.remove();
            //  $('#loading').remove();
            position.style.display = 'none';
        }

        loadingBackground.style.opacity=opacity;
        opacity-=0.4;
    },100);
}