// 获取 URL 参数
function getUrlParameter(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 替换 iframe 中的网页并聚焦视角
function replaceIframeSource() {
    var link = getUrlParameter('link');
    if (link) {
      	var iframe = document.getElementById('myIframe');
      	iframe.src = link;
      	iframe.scrollIntoView({ behavior: 'smooth' });

      	// 监听 iframe 的加载事件
      	iframe.addEventListener('load', function() {
        	// 获取 iframe 内部文档的标题
        	var iframeTitle = iframe.contentDocument.title;

        	// 更新 <title> 标签的内容
        	var dynamicTitle = document.getElementById('dynamicTitle');
        	dynamicTitle.innerHTML = "568Tools | " + iframeTitle;
      	});
    }
}

  	// 页面加载完成时调用替换函数
window.onload = function() {
	replaceIframeSource();
	// 添加你的代码...
};