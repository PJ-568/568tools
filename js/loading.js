//Loading页面
document.onreadystatechange=function () {
    if (document.readyState=="complete"){
         loadingFade();
    }
}
function loadingFade() {
var opacity=1;
const position = document.querySelector('#loading');
//var loadingPage=document.getElementById('loading');
var loadingBackground=document.getElementById('loading_bg');
var time=setInterval(function () {
    if (opacity<=0){
        clearInterval(time);
        //loadingPage.remove();
        //  $('#loading').remove();
        position.style.display = 'none';
    }

    loadingBackground.style.opacity=opacity;
    opacity-=0.4;
},100);
}