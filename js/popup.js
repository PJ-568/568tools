function getD(val,type){
	if(!type){
		return document.getElementById(val);
	}
	if(type='class'){
		return document.getElementsByClassName(val);
	}
}
function throttle(fn, delay) {
	delay=delay || 200;
	let timer = null;
	return function () {
		if(timer) return;
		timer = setTimeout(() => {
			fn.apply(this,arguments);
			timer = null;
		})
   }
}
function setSotreList(data){
	var sotreList=localStorage.getItem('list');
	var max=8;
	sotreList=JSON.parse(sotreList || '[]');
	for(let i in sotreList){
		if(sotreList[i].name==data.name){
			sotreList.splice(i,1);
		}
	}
	sotreList.splice(max,sotreList.length-max);
	sotreList.unshift(data);
	localStorage.setItem('list',JSON.stringify(sotreList));
}
var _URL='https://Tools.pj568.eu.org/';
function initData(){
	var nav=getD('nav'),
		list=getD('list'),
		keyword=getD('keyword'),
		nav_html='',
		list_html='',
		sotreList=localStorage.getItem('list');
		// 初始化
		list_html+=`<div class="item info"><h2>欢迎使用&nbsp;568Tools&nbsp;在线工具箱</h2><div id="ad_line" style="margin: 0 10px;"></div><p>致力于创造并维护无需注册、下载和上传即可免费使用的静态在线工具环境。部分项目来源于开源项目，浅蓝色标记为热门工具。<a href="./data.json" target="_blank">点击查看</a>&nbsp;json&nbsp;数据。</p><p><strong>如果您有问题或建议，请不要吝啬您的<a rel="nofollow" target="_blank" href="./comment">留言反馈</a>，感谢使用及分享！</strong>本站欢迎<a rel="nofollow" target="_blank" href="./comment">提交您的页面</a>，本站将持续更新。</p><p>下载&nbsp;<strong>[568Tools&nbsp;工具箱]</strong>&nbsp;浏览器扩展插件或应用程序以供离线使用：<a rel="nofollow" target="_blank" href="https://chrome.google.com/webstore/detail/fly63%E5%B7%A5%E5%85%B7%E7%AE%B1/oicicpjppdafaknaepojmjpjoinimbel">谷歌 Chrome</a>、<a rel="nofollow" target="_blank" href="https://addons.mozilla.org/zh-CN/firefox/addon/fly63%E5%B7%A5%E5%85%B7%E7%AE%B1/">火狐 Firefox</a>、<a rel="nofollow" target="_blank" href="https://microsoftedge.microsoft.com/addons/detail/akpeonmkmdaifdnliibdoklpjcecdcnk">微软 Edge</a>、<a rel="nofollow" target="_blank" href="/lib/plug/flytool.crx">crx文件下载</a>。</p></div>`
		// nav_html+=`<a class="menu_item_href" href="https://Tools.pj568.eu.org/">568Tools&nbsp;在线工具箱</a><a class="menu_item_href">|</a>`
		// 初始化结束
	if(!!sotreList){
		sotreList=JSON.parse(sotreList);
		// 最近访问
		list_html+=`<div class="item"><h2>最近访问</h2><div class="child">`;
		for(var i in sotreList){
			var li = sotreList[i];
			list_html+=`<a href="${li.url}" target="_self">${li.name}</a>`;
		}
		list_html+=`</div></div>`;
	}
	for(var i in classify){
		var item=classify[i];
		// 顶栏的按钮
		nav_html+=`<a href="#${item.id}">${item.name}</a>`;
		// 主要选项
		list_html+=`<div id="${item.id}" class="item"><h2>${item.name}</h2><div class="child">`;
		for(var j in item.list){
			var li=item.list[j];
			list_html+=`<a href="${li.url}"${li.hot==1 ? ' class="red" ' : ''}idx="${i}_${j}" target="_self" title="${li.name}">${li.name}</a>`;
		}
		list_html+=`</div></div>`;
	}
	// 后补
	nav_html+=`<a href="#0" target="_self">页内页</a>`
	list_html+=`<div id="0" class="item"><h2>页内页</h2><div class="child"><iframe src="https://pj568.eu.org/Spinning_Bird/" class="page"></iframe><img class="stars" src="https://api.star-history.com/svg?repos=PJ-568/568tools&type=Date" /></div></div><div class="item"><a class="ota" href="#">↑↑&nbsp;&nbsp;&nbsp;&nbsp;返回页顶&nbsp;&nbsp;&nbsp;&nbsp;↑↑</a></div>`
	// 后补结束
	nav.innerHTML=nav_html;
	list.innerHTML=list_html;
	getD("classify").addEventListener("click",setClassify);
	list.addEventListener("click",function(e){
		if(e.target.getAttribute('class').indexOf('sli')>-1){
			toHref(e.target);
		}
	});
	keyword.addEventListener('input', throttle(setSearch));
	keyword.addEventListener('focus', throttle(setSearch));
	keyword.addEventListener('blur', function() {
		setTimeout(function() {
			getD('searchContent').innerHTML = '';
		}, 250)
	});
	getD('closekeyword').addEventListener("click",function(){
		keyword.value='';
		this.style.display= 'none';
	});
	getD('searchContent').addEventListener("click",function(e){
		if(e.target.getAttribute('class')=='ssli'){
			toHref(e.target);
		}
	});
	getD('logo').addEventListener('click',function(e){
		var	url=_URL+'/tool/home.html';
		window.open(url,'_blank');
	});
}
function setSearch(value){
	var value=this.value.trim();
	var searchContent = getD('searchContent');
	var closekeyword = getD('closekeyword');
	var shtml = '';
	value = value.toLowerCase(); //输入值
	if (value == '') {
		searchContent.innerHTML = '';
		closekeyword.style.display= 'none';
		return;
	}
	closekeyword.style.display= 'block';
	for (var i in classify) {
		for (var j in classify[i].list) {
			var li = classify[i].list[j];
			if (!!li.name && li.name.toLowerCase().indexOf(value) > -1) {
				shtml += `<a class="ssli" idx="${i}_${j}" class="${li.hot==1 ? 'hot' : ''}" target="_self" title="${li.name}">${li.name}</a>`; 
			}
		}
	}
	searchContent.innerHTML = shtml;
}
function toHref(dom){
	var idx=dom.getAttribute('idx');
	var url=dom.getAttribute('url');
	if(!!idx){
		idx=idx.split('_');
		var data=classify[idx[0]].list[idx[1]];
		setSotreList(data);
		url=data.url;
	}
	if(!url){
		return;
	}
	if(!(url.indexOf('http://')>-1 || url.indexOf('https://')>-1)){
		url=_URL+url;
	}
	window.open(url,'_blank');
}
function setClassify(){
	var cls=getD('cls'),
		nav=getD('nav'),
		line=getD('line');
	var val=cls.getAttribute('class');
	if(!val){
		cls.setAttribute('class','rotate');
		nav.style.display='block';
		line.style.height='132px';
		return;
	}
	cls.setAttribute('class','');
	line.style.height='44px';
	nav.style.display='none';
}
initData();
