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
	}
}

// 页面加载完成时调用替换函数
window.onload = replaceIframeSource;