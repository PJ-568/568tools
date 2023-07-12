function blackboardToggle(bull) {
	$(".blackboard").css({'pointer-events':bull ? 'all':'none','opacity':bull ? 1:0})
}

function slide_way(nth, animation) {  // 三级切换
	console.log("slide_way:" + nth)
	var move;
	if (animation == false) {
		$(".slide_way").css("transition", "0ms");
	} else {
		$(".slide_way").css("transition", "340ms");
	}
	if (nth == 0) {
   		move = 0;
		outPut_swith(false)
    } else if (nth == 1) {
   		move = -602;
		outPut_swith(false)
    } else if (nth == 2) {
  		move = -1204;
    	outPut_swith(true)
    }
	
	if (nth == 1) {
		if (localStorage.cmdOutVersion_Swith == 1) {
			$(".production_slide").css({"transition":"350ms", "transform": "translateX(-50%)"})
			$(".production_slide-foucs li:eq(1)").css({'color':'#008aff'})
			$(".production_slide-foucs li:eq(0)").css({'color':'#666'})
			localStorage.cmdOutVersion_Swith = 1;
		}
		$(".production_slide-foucs").fadeIn()
		
	} else if (nth != 2){
		$(".production_slide-foucs").fadeOut();
		$(".production_slide").css({"transition":"350ms", "transform": "translateX(0%)"})
		$(".production_slide-foucs li:eq(0)").css({'color':'#008aff'})
		$(".production_slide-foucs li:eq(1)").css({'color':'#666'})
	}
	
	$(".slide_way").css({"transform": "translate(" + move + "px,0)"})
	
	for (j = 0;j <= SCGWs.length;j ++) {
		$(SCGWs[j]).css({'background-color': "rgba(0,0,0,.08)","border-bottom": "solid 1px #dddddd", "z-index": 0, "color": "rgba(0,0,0,.6)","top": "3px"});
	}
	$(SCGWs[nth]).css({'background-color': "#fff","border-bottom": "solid 1px transparent", "z-index": 1, "color": "#000000","top": "0px"});
}

function copyHandle(content) { // 指令复制
	if (content != undefined) {
		let copy = (e) => {
			e.preventDefault()
			e.clipboardData.setData('text/plain', content)
			// alert('成功复制：' + content)
			document.removeEventListener('copy', copy)
		}
		document.addEventListener('copy', copy)
		document.execCommand("Copy");
		Messagebox(content);
		
		$(".output_destination").css({"background-image": "url('img/copy_background1.png')"})
	} else {
		Messagebox("内容为空","alert");
	}
}

function particle_color_board_toggle(bull) {
	$(".particle_color_board").css({
		"pointer-events": bull ? "all" : "none",
		"opacity": bull ? 1 : 0,
		"transform": bull ? "scale(1)" : "scale(0.9)",
		"transition": "200ms"
	})
}

function Messagebox(content, type) {
	if (type === undefined) {
		$("#copyText").html("<span style='color:#00fff7;'>成功复制：</span>"+content);
		$(".Messagebox").css({"background-color": "#55aa00"})
	} else if (type == "alert") {  // 警告
		$("#copyText").text(content);
		$(".Messagebox").css({"background-color": "#ff8b38"})
	} else if (type == "info") { // 信息
		$("#copyText").text(content);
		$(".Messagebox").css({"background-color": "#55aaff"})
	}
		
	$(".Messagebox").css({
		"pointer-events": "all",
		"opacity": "1",
		"transform": "translate(0, 0%)"
	})
	setTimeout(() => {
		$(".Messagebox").css({
			"pointer-events": "none",
			"opacity": "0",
			"transform": "translate(0, -100%)"
		})
	}, 1000)
	
}

function output_cmd(cmd) {
	
	// 清空 --> 填充指令 --> css改变
	$(outputs[0]).html("").append(cmd).css({"background-image": "url('img/copy_background.png')"});

	$(".output_destination").css({
		"transition": "0ms",
		"transform": "translate(-50%,0%)",
		"opacity": 0
	})
	setTimeout(() => {
		$(".output_destination").css({
			"transition": "300ms",
			"transform": "translate(3%,0%)",
			"opacity": 1
		})
	},2)
	setTimeout(() => {
		$(".output_destination").css({
			"transform": "translate(0%,0%)"
		})
	},300)
}

function cpt_animation(V, bull){
	if (V == "parameter") {
		if (bull == true) {
			$("#parameter_cpt").css({"opacity": "1", "transform": "translateX(0px)", "pointer-events": "all"});
			$("#parameter_cpt_box").css("background-image", "url('img/btn_check1.png')");
			$("#parameter_row_status").text("开");
		} else {
			$("#parameter_cpt").css({"opacity": "0", "transform": "translateX(-50px)", "pointer-events": "none"});
			$("#parameter_cpt_box").css("background-image", "url('img/btn_check0.png')");
			$("#parameter_row_status").text("关");
		}
	} 
	if (V == "polarparameter") {
		if (bull == true) {
			$("#polarparameter_cpt").css({"opacity": "1", "transform": "translateX(0px)", "pointer-events": "all"});
			$("#polarparameter_cpt_box").css("background-image", "url('img/btn_check1.png')");
			$("#polarparameter_row_status").text("开");
		} else {
			$("#polarparameter_cpt").css({"opacity": "0", "transform": "translateX(-50px)", "pointer-events": "none"});
			$("#polarparameter_cpt_box").css("background-image", "url('img/btn_check0.png')");
			$("#polarparameter_row_status").text("关");
		}
	}
	
}

function speed_hideExpression_and_hideExpression_pos(n) {  // 表达式选择面板 定位
	$(".hideExpression").css({"margin-top": n + "px"})
}

function setBox(bull){
	if (bull == true) {
		$(".setBox").css({"left": "0", "transition": "all 400ms cubic-bezier(0.08, 0.5, 0,1)"})
		 blackboardToggle(bull)
	} else {
		$(".setBox").css({"left": "-400px", "transition": "all 400ms cubic-bezier(.3, 0.5, .12, 1)"})
		blackboardToggle(bull)
	}
}

function Level_1(nth, t) {
	Level_1_Tmep = nth;
	let distance = 80  // 平移距离
	let time = 300  // 过渡时间
	let M = ''//" cubic-bezier(0.08, 0.3, 0,1)";
	if (nth == 0) {
		$(chunks[0]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "1","pointer-events": "all","transform": "translateX(0px)","z-index": "1"});
		$(chunks[1]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "0","pointer-events": "none","transform": "translateX("+ distance +"px)","z-index": "0"});
		$(chunks[2]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "0","pointer-events": "none","transform": "translateX("+ distance +"px)","z-index": "0"});
	} else if (nth == 1) {
		$(chunks[1]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "1","pointer-events": "all","transform": "translateX(0px)","z-index": "1"});
		$(chunks[0]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "0","pointer-events": "none","transform": "translateX(-"+ distance +"px)","z-index": "0"});
		$(chunks[2]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "0","pointer-events": "none","transform": "translateX("+ distance +"px)","z-index": "0"});
	} else if (nth == 2) {
		$(chunks[2]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "1","pointer-events": "all","transform": "translateX(0px)","z-index": "1"});
		$(chunks[1]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "0","pointer-events": "none","transform": "translateX(-"+ distance +"px)","z-index": "0"});
		$(chunks[0]).css({"transition": t == true ?  ""+ time +"ms" + M: "0ms","opacity": "0","pointer-events": "none","transform": "translateX(-"+ distance +"px)","z-index": "0"});
		
		if (setoutTime == true) {
			$("#community_iframe").attr("src", "https://mc.ecylt.top/shequ/");
			setoutTime = false;
		}
	}
	for (let j = 0;j <= NavigationBar.length;j ++) {
		$(NavigationBar[j]).css({"background-color": "transparent","color": "#333"});
	}
	$(NavigationBar[nth]).css({"background-color": "#fff","color": "#519ef7"});
	
	// 预设参数面板
	if (nth == 1) {
		outPut_swith(false)
	} else if (nth == 0 && Number(localStorage.WayFocus) == 2) {
		outPut_swith(true)
	}
	
	if (t == false) {
		preinstall_toggle(false)
	}
}

function Level_2_listUls(i) {
	for(let j = 0;j <= chunksResourceBoxs.length;j ++){
		$(listUls[j]).css({"background-color": "transparent", "color": "#333", "letter-spacing": "0", "padding-left": "0"})
		$(focuss[j]).css({"background-color": "transparent"})
	}
	$(listUls[i]).css({"background-color": "#dfe7ea", "color": "#11006a", "letter-spacing": "2px", "padding-left": "15px"})
	$(focuss[i]).css({"background-color": "#0072ff"})  // 目录蓝色点缀焦点
}

function Level_2(i) {
	for(let j = 0;j <= chunksResourceBoxs.length;j ++){
		$(chunksResourceBoxs[j]).css({"transition": "0ms","opacity": "0","pointer-events": "none","transform": "translateX("+ 30 +"px)","z-index": "-1"});
	}
	$(chunksResourceBoxs[i]).css({"transition": "500ms cubic-bezier(0.08, 0.3, 0,1)","opacity": "1","pointer-events": "all","transform": "translateX(0px)","z-index": "1"});
	
	Level_2_listUls(i);

	optimize(i);
	
	// 目录栏 - 事件
	resource_sonList_event(i);
	
}

function optimize(nth) {  // 优化处理
	if (nth == 1) {
		$(chunks).css({"background-color": "#eff4fa"})
		let cards = $(".cardBox");
		for (let i = 0;i < cards.length;i ++ ) {
			$(complete_commandCards[i]).css({"background-image": "url('img/card/" + i + ".jpg')"});
		}
	} else {
		$(chunks).css({"background-color": "#ffffff"})
	}
	if (nth == 4) {
		$(".download_to_mod").attr('src', 'img/colorblock_logo2.png')
		
		$(".download_card:eq(0) .download_card_img").css({"background-image": "url('img/download/replay.jpg')"})
		$(".download_card:eq(1) .download_card_img").css({"background-image": "url('img/download/BSL1.jpg')"})
		$(".download_card:eq(2) .download_card_img").css({"background-image": "url('img/download/SEUS - DAZZLING.jpg')"})
	} else if (nth == 2) {
		
		let Tutorial_imgs = $("#tutorial img");
		const imgArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
		
		for (let i = 0; i < Tutorial_imgs.length; i++) {
			imgArr[i] = $(Tutorial_imgs[i]).attr('alt');
			// console.log(imgArr[i]) 
			$(Tutorial_imgs[i]).attr('src', imgArr[i]);
		}
	}
}

function TWay() {  // 指令生成器 > colorBlock 1.16.5版 > 模式 ——事件
	
	localStorage.TWay = $("#way").find("option:selected").val();  // 找到列表中选择的目标value
	let temp = localStorage.TWay;
	
	
	let nth = temp == "normal" ? 0 : (temp == "parameter" ? 1 : (temp == "polarparameter" ? 2 : (temp == "conditional" ? 3 : (temp == "image" ? 4 : 5))));

 
 	localStorage.TWay_nth = nth;
	
	console.log("TWay nth: " + nth + "\nTWay name: " + temp)
	
	for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[nth]).show()
	
}

function CRBcontent_scroll(CRB_STop){
	if (CRB_STop >= 200 && CRB_STopTemp == 0) {
		$(".CRB1_txt").css({'transition':''+ CRB_times +'ms','left': '-8px', 'opacity':0})
		setTimeout(()=>{
			$(".CRB1_txt").text("JAVA 1.12.2").css({'transition':'0ms','left':'8px'})
			setTimeout(()=>{
				$(".CRB1_txt").css({'transition':''+ CRB_times +'ms','left': '0px', 'opacity':1})
			},15)
		},CRB_times)
		CRB_STopTemp = 1;
	} else if (CRB_STop <= 200 && CRB_STopTemp == 1) {
		$(".CRB1_txt").css({'transition':''+ CRB_times +'ms','left':'-8px', 'opacity':0})
		setTimeout(()=>{
			$(".CRB1_txt").text("JAVA 1.16.5").css({'transition':'0ms','left':'8px'})
			setTimeout(()=>{
				$(".CRB1_txt").css({'transition':''+ CRB_times +'ms','left': '0px', 'opacity':1})
			},15)
		},CRB_times)
		CRB_STopTemp = 0;
	}
}

function setting_swith(nth, bull) {
	let swiths = $("*.swith");
	let swith_rounds = $("*.swith_round");
	$(swith_rounds[nth]).css({'transform': bull ? 'translateX(130%)':'translateX(0%)'})
	$(swiths[nth]).css({'background-color': bull ? '#00aaff':'#8c8c8c'})
	
	$(swith_rounds[nth]).css({"box-shadow": "0 0 0px 15px rgba(255, 255, 255, 0.3)"})
	setTimeout(() => {
		$(swith_rounds[nth]).css({"box-shadow": "0 0 0px 15px rgba(255, 255, 255, 0.0)"})
	},300)
}

function outPut_swith(bull) {
	let boxs = $(".output_cmd div");
	if (bull == false) {
		$(boxs[0]).fadeIn(200)
		$(boxs[1]).fadeOut(200)
		
		// 傅里叶参数预设面版显示与否
		preinstall_toggle(false)
	} else {
		$(boxs[0]).fadeOut(200)
		$(boxs[1]).fadeIn(200)
		
		// 傅里叶参数预设面版显示与否
		preinstall_toggle(true)
	}
}

function preinstall_toggle(bull)  {
	if (bull == true)
		$(".preinstall").css({'transition':'240ms','transform':'scale(1)','opacity':'1','pointer-events':'all'})
	else 
		$(".preinstall").css({'transition':'240ms','transform':'scale(0.9)','opacity':'0','pointer-events':'none'})
}

function feedback_toggle(bull) {
	$(".feedback_Box").css({'transition':'240ms','transform':bull == true ? 'scale(1)' : 'scale(0.9)','opacity':bull == true ? 1 : 0,'pointer-events':bull == true ? 'all' : 'none'})
}

function resource_sonList_event(nth) {
	if (nth == 2) {
		tutorial_list_toggle(true);
	} else {
		tutorial_list_toggle(false);
	}
}
	
function tutorial_list_toggle(bull) {
	$("#tutorial_list").css({"transition": '0ms', "opacity": 0})
	$(".listUl").css({"transition": '0ms', "opacity": 0})
	setTimeout( () => {
		$("#tutorial_list").css({
			"opacity": bull == true ? 1 : 0,
			"transition": '450ms cubic-bezier(0.08, 0.3, 0,1)',
			"transform": bull == true ? "translateX(0%)" : "translateX(10%)",
			'pointer-events': bull == true ? 'all' : 'none'
		})
		
		$(".listUl").css({
			"opacity": bull == true ? 0 : 1,
			"transition": '450ms cubic-bezier(0.08, 0.3, 0,1)',
			"transform": bull == true ? "translateX(10%)" : "translateX(0%)",
			'pointer-events': bull == true ? 'none' : 'all'
		})
		
	}, 5)
	
	$(".directory_head").html(bull == true ? `<span class="directory_head">目录</span> <span class="grey">></span> <span>自编教程</span>` : `<span class="directory_head">目录</span>`)
	$(".return").css("opacity", bull == true ? 1 : 0)
}

function hasChinese(text) {  // 判断是否是中文
	var pattern = /[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]/;
	return pattern.test(text);
}
	
function hasEnglish(text) { // 判断是否是英文
	var pattern = /[a-zA-Z]/;
	return pattern.test(text);
}

