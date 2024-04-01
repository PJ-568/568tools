let tds = $("td");
let td_ipts = $("td input[type='text']");
document.addEventListener('click', (e) => {
	copyed = [];
	/*
	e.target.innerHTML  //获取元素
	e.target.innerText  //获取文本
	e.target.nodeName   //获取标签名
	*/
	if(e.target.className == "axis")
	{
		//alert()
  		$("* .point").remove()
		$(tds).append("<div class='point'><div class='angle'></div><p>标题</p></div>")
	}
	
})

//$("* .point").remove()
//$(tds[j]).append("<div class='point'><div class='angle'></div><p>标题</p></div>")
				