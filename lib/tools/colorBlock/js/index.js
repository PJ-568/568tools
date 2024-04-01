// 《一级》导航栏切换-布局事件
var NavigationBar = $(".Navigation-bar button");
var chunks = $("*#chunks");
localStorage.NavigationBarTemp;
for(let i = 0;i <=NavigationBar.length;i ++) {
	$(NavigationBar[i]).click(()=>{
		console.log(".Navigation-bar: " + i);
		Level_1(i, true);
		localStorage.NavigationBarTemp = i;
	})
}
// 《一级》导航栏-布局初始化

if (localStorage.NavigationBarTemp == undefined) { 
	localStorage.NavigationBarTemp = 0;
	Level_1(0 ,false);} else {
	Level_1(localStorage.NavigationBarTemp, false);
}
// 《二级》导航栏-子分支切换导航栏 of resource
var listUls = $(".listUl li");
var chunksResourceBoxs = $("*.chunks-resource-box");
localStorage.NavigationBar_listUlsTmep;
for(let i = 0;i <=listUls.length;i ++) {
	$(listUls[i]).click(() => {
		console.log(i);
		Level_2(i);
		localStorage.NavigationBar_listUlsTmep = i;
	})
	$(listUls[i]).mouseover(()=>{
		Level_2_listUls(i);
	});
	$(listUls[i]).mouseout(() => {
		Level_2_listUls(localStorage.NavigationBar_listUlsTmep);
	});
	
}
// 《二级》导航栏-子分支切换导航栏-布局初始化
if (localStorage.NavigationBar_listUlsTmep == undefined) {
	 Level_2(0);
} else {
	Level_2(localStorage.NavigationBar_listUlsTmep);
}

// 《二级》导航栏-子分支切换导航栏-按钮复制功能
document.addEventListener('click', (e) => {
	copyed = [];
	/*
	e.target.innerHTML  //获取元素
	e.target.innerText  //获取文本
	e.target.nodeName   //获取标签名
	*/
	if(e.target.id == "Copy_to_value")
	{
		copyHandle(e.target.value);
	}
	
})


// .swith_cmd_Generator_way 切换指令生成方式
localStorage.WayFocus;  // 永久切换存储变量
var SCGWs = $(".swith_cmd_Generator_way");
for (let i = 0; i <= SCGWs.length; i++) {
	$(SCGWs[i]).click(() => {
		
		slide_way(i)
		
		localStorage.WayFocus = i
	})
}
slide_way(localStorage.WayFocus, false)
if (localStorage.WayFocus == undefined) {
	slide_way(0);
 	console.log(localStorage.WayFocus)
}










var wayTable = $(".wayTable");	// html 表格对象

// 方式切换的映射的 重要事件！
$("#way").change(()=>{
	TWay();
})
// 初始化
if (localStorage.TWay == undefined) {
	localStorage.TWay = "normal";
 	
	$("#way").val(localStorage.TWay);
} else {
	$("#way").val(localStorage.TWay);
 
 	console.log(localStorage.TWay)
	
}
if (localStorage.TWay_nth == undefined) {
	localStorage.TWay_nth = 0;
	for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[localStorage.TWay_nth]).show() 
} else {
	for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[localStorage.TWay_nth]).show() 
	console.log(localStorage.TWay_nth)
}


// colorBlock 其他复制按钮
var cmdIpt_copy = $(".cmdIpt_copy");

for (let i = 0;i <= cmdIpt_copy.length;i ++) {
	$(cmdIpt_copy[i]).click(() => {
		console.log(i)
		if (i == 0) copyHandle("/particleex clearparticle");
		if (i == 1) copyHandle("/particleex clearcache");
	})
}








// colorBlock_version swithing - feed back
var SPV = $(".switch_particle_version");

// intialize
if (localStorage.SPVt == undefined) {
	$(SPV).html("⇋ 切换版本 1.16.5").css("color","#00aaff");
	localStorage.SPVt = 1;
} else if (localStorage.SPVt == 1) {
	$(SPV).html("⇋ 切换版本 1.16.5").css("color","#00aaff");
	$("*.cmdName_select option").remove();
} else {
	$(SPV).html("⇋ 切换版本 1.12.2").css("color","#e252ff");
	$("*.cmdName_select option").remove();
}

// command_version swithing - inside event 
$(SPV).click(() => {
	
	$("*.cmdName_select option").remove();
	
	if (localStorage.SPVt == 1) {
		$(SPV).html("⇋ 切换版本 1.12.2").css("color","#e252ff");
	
		for(let i = 0;i < old_particles.length;i ++) {
			$(".cmdName_select").append("<option value='"+ old_particles[i][0] +"'>"+ old_particles[i][1] +"</option>");
		}
		Messagebox("已切换为:JAVA 1.12.2 forge 版本", "info")
		localStorage.SPVt = 0;
	} else {
		$(SPV).html("⇋ 切换版本 1.16.5").css("color","#00aaff");
		
		for(let i = 0;i < new_particles.length;i ++) {
			$(".cmdName_select").append("<option value='"+ new_particles[i][0] +"'>"+ new_particles[i][1] +"</option>");
		}
		Messagebox("已切换为:JAVA 1.16.5 fabirc 版本", "info")
		localStorage.SPVt = 1;
	}
	
})

// 数据填充 of particle_data.js

// new particle
for(let i = 0;i < new_particles.length;i ++) {
	
	$(".chunks-resource-box-content").append("<button id='Copy_to_value' title='"+new_particles[i][0]+"' value='minecraft:"+new_particles[i][0]+"'>"+new_particles[i][1] +"</button>");
	$(".cmdName_select").append(`<option value='`+ new_particles[i][0] +`'>`+ new_particles[i][1] +`</option>`);
}

// old particle
$(".chunks-resource-box-content").append("<br><p class='CRB1_title'>JAVA 1.12.2</p>");
for(let i = 0;i < old_particles.length;i ++) {
	
	$(".chunks-resource-box-content").append("<button id='Copy_to_value' title='"+old_particles[i][0]+"' value='"+old_particles[i][0]+"'>"+old_particles[i][1] +"</button>");
	$("*#cmdName_select, #CB1_cmdName_select").append("<option value='"+ old_particles[i][0] +"'>"+ old_particles[i][1] +"</option>");
}





// 黑色透明遮罩 单机自动关闭相关窗口事件
$(".blackboard").click(() => {
	$(".autoClose").css({'transition':'240ms','transform':'scale(0.9)','opacity':'0','pointer-events':'none'})
})





