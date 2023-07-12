$(".set").click(() => {
	setBox(true)
})
$(".setBox-closeWin, .blackboard").click(() => {
	setBox(false)
})
// 处理按下键盘的操作
var setBoxBull = 0;
$(document).keydown((e) => {
  	// ESC键 打开/关闭 设置
	if (e.keyCode == 27 && setBoxBull == 0) {
		setBox(true)
		setBoxBull = 1;
	} else if (e.keyCode == 27 && setBoxBull == 1) {
		setBox(false)
		setBoxBull = 0;
	}
	// Ctrl + R 组合键清除缓存
	if (e.ctrlKey && (e.keyCode == 114 || e.keyCode == 82)) {
		localStorage.clear();
		location.reload()
	}
})

//localStorage.clear();

// 第一个按钮 ——欢迎问候语
var swiths = $("*.setBox ul li");
$(swiths[0]).click(() => {
	if (localStorage.setting1 == 0) {
		localStorage.setting1 = 1;
		setting_swith(0, 1);
	} else {
		localStorage.setting1 = 0;
		setting_swith(0, 0);
	}
})
$(swiths[1]).click(() => {
	if (localStorage.setting2 == 0) {
		localStorage.setting2 = 1;
		setting_swith(1, 1);
	} else {
		localStorage.setting2 = 0;
		setting_swith(1, 0);
	}
})
// 初始化设置
// nth 1
if (localStorage.setting1 == undefined) {
	localStorage.setting1 = 1;
	setting_swith(0, 0);
} else 
	setting_swith(0, localStorage.setting1);
if (localStorage.setting1 == 0) 
	setting_swith(0, 0);
else 
	setting_swith(0, 1);
	
	
 // nth 2
if (localStorage.setting2 == undefined) {
	localStorage.setting2 = 0;
	setting_swith(1, 0);
} else 
	setting_swith(1, localStorage.setting2);
if (localStorage.setting2 == 0) 
	setting_swith(1, 0);
else 
	setting_swith(1, 1);



// options
var opt1Temp = false;
var opts = $("*.options .option");
for(let i = 0;i <= opts.length;i ++) {
	$(opts[i]).click(() => {
		if (i == 0) {
			if (opt1Temp == false) {
				opt1Temp = true;
				$("#day_and_night").css({"background-color":"#00aaff"})
			} else {
				opt1Temp = false;
				$("#day_and_night").css({"background-color":"rgba(255, 255, 255, .2"})
			}
		}
	})
}