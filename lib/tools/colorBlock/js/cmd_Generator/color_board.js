var bgColorBtn = [
    "#000000",
    "#aa0000",
    "#005500",
    "#aa5500",
    "#00aa00",
    "#aaaa00",
    "#00ff00",
    "#aaff00",
    "#00007f",
    "#aa007f",
    "#00557f",
    "#aa557f",
    "#00aa7f",
    "#aaaa7f",
    "#00ff7f",
    "#aaff7f",
    "#0000ff",
    "#aa00ff",
    "#0055ff",
    "#aa55ff",
    "#00aaff",
    "#aaaaff",
    "#00ffff",
    "#aaffff",
    "#550000",
    "#ff0000",
    "#555500",
    "#ff5500",
    "#55aa00",
    "#ffaa00",
    "#55ff00",
    "#ffff00",
    "#55007f",
    "#ff007f",
    "#55557f",
    "#ff557f",
    "#55aa7f",
    "#ffaa7f",
    "#55ff7f",
    "#ffff7f",
    "#5500ff",
    "#ff00ff",
    "#5555ff",
    "#ff55ff",
    "#55aaff",
    "#ffaaff",
    "#55ffff",
    "#ffffff"
];

// particle color 遍历颜色按键

for (let i = 0; i < 48;i ++) {
	$("#btnColor").append("<button class='colorBtn'></button>");
	setTimeout(()=>{
		let colorBtn = $(".colorBtn");
		$(colorBtn[i]).css('background-color', bgColorBtn[i])
	},1)
}

var list;
// 真实 rgba 变量
var red = 1;
var green = 1;
var blue = 1;
var alphas = 1;

// 缓存 rgba 变量
var Temp_red = 1;
var Temp_green = 1;
var Temp_blue = 1;
var Temp_alphas = 1;

var pColors = $(".pColor");

for (let i = 0; i <= pColors.length; i++) {
	$(pColors[i]).focus(() => {
		// id = $(pColors).attr("id")

		particle_color_board_toggle(true)
		
		rgba_count(i)
		Temp_i = i;
		console.log("list: " + i)
	})
}

// 确定颜色 点击事件
var Temp_i;
$("#particle_color_save").click(() => {
	particle_color_board_toggle(false)
	red = Temp_red;
	green = Temp_green;
	blue = Temp_blue;
	alphas = Temp_alphas;
	$(pColors[Temp_i]).attr("value", red + " " + green + " " + blue + " " + alphas)

})
// 关闭颜色设置面板 点击事件
$("#particle_color_board_close,#particle_color_cancel").click(() => {
	particle_color_board_toggle(false)
})

// 获取不透明度
alpha.addEventListener("input", () => {
	// console.log($("#alpha").val())
	var value = $("#alpha").val()
	$("#alpha_show").text(value + "%")

	Temp_alphas = value / 100
});




function rgba_count(subscript) {
	Temp_i = subscript;

	// 排他思想 获取颜色 rgb 值
	var btnColor = $(".colorBtn");
	var sure_color
	for (let i = 0; i <= btnColor.length; i++) {
		$(btnColor[i]).click(() => {

			for (j = 0; j <= btnColor.length; j++) {
				$(btnColor[j]).css({
					"border": "dashed 2px transparent"
				})
			}
			$(btnColor[i]).css({
				"border": "dashed 2px #5a5a5a"
			})
			// 获取该 btn 得到背景颜色
			let rgb = $(btnColor[i]).css('background-color')
			// console.log(rgb + typeof(rgb))
			let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
			let str = []
			for (j = 0; j <= rgb.length; j++) {
				for (k = 0; k < arr.length; k++) {
					if (rgb[j] == arr[k]) {
						str += rgb[j]
					}
				}
			}
			console.log("结果:" + str)
			sure_color = str

			// 将 rgb字符串转换成 r, g, b 三元色
			// console.log("rgb 转换目标:" + str + "\n数据类型：" + typeof(str))
			conversion_r = [];
			conversion_g = [];
			conversion_b = []; // 目标三原色
			let rgb_conversion_outcome = [] // 转换结果数组

			let tempTime = 0; // 三原色赋值 轮换次数
			t_str = str + " "; // 决绝没有第三个空格问题
			for (j = 0; j <= t_str.length; j++) {
				if (t_str[j] != " ") {
					rgb_conversion_outcome += t_str[j]
					// console.log("j:" + j + " out:" + rgb_conversion_outcome)
				} else {
					if (tempTime == 0) conversion_r = Number(rgb_conversion_outcome) / 255
					if (tempTime == 1) conversion_g = Number(rgb_conversion_outcome) / 255
					if (tempTime == 2) conversion_b = Number(rgb_conversion_outcome) / 255
					tempTime++;
					rgb_conversion_outcome = [];
				}
			}
			$("#rbga_displayed_r").text(conversion_r * 255)
			$("#rbga_displayed_g").text(conversion_g * 255)
			$("#rbga_displayed_b").text(conversion_b * 255)

			Temp_red = Math.floor(conversion_r * 10) / 10
			Temp_green = Math.floor(conversion_g * 10) / 10
			Temp_blue = Math.floor(conversion_b * 10) / 10
			console.log("结果:" + Temp_red + " " + Temp_green + " " + Temp_blue)
		})
	}
}




// 拖动面板
$(".particle_color_board .column").on('mousemove', () => {
	$(".particle_color_board").css('transition','0ms').draggable();
})

