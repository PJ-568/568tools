//Loading页面
document.onreadystatechange=function () {
    if (document.readyState=="complete"){
         loadingFade();
    }
}
function loadingFade() {
    var opacity=1;
    const position = document.querySelector('#loading');
    //  var loadingPage=document.getElementById('loading');
    var loadingBackground=document.getElementById('loading_bg');
    var time=setInterval(function () {
        if (opacity<=0){
            clearInterval(time);
            //  loadingPage.remove();
            //  $('#loading').remove();
            position.style.display = 'none';
            try{
                translate.service.use('client.edge');
                translate.listener.start();
                translate.setAutoDiscriminateLocalLanguage();
                translate.language.setUrlParamControl();
                translate.ignore.class.push('notTranslate');
                translate.nomenclature.append('chinese_simplified','english',`
                    刘甜=Liu Tian
                    主页=Home
                    友链=Links
                `);
                translate.execute();
            }
            catch(e){console.log('翻译系统出错：' + e);}
        }

        loadingBackground.style.opacity=opacity;
        opacity-=0.4;
    },100);
}