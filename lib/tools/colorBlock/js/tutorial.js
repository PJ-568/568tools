// 声明滚动区域
let tutorialScroll = $("#tutorial");
// 声明滚动导航列表
let tutorial_lists = $("#tutorial_list li");
// 声明目标滚动元素
let units = $("#tutorial #unit");
// 单元与文档顶部的相对距离数组
var unitTopArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 遍历获取相对距离
for (let i = 0; i < tutorial_lists.length; i++) {
	unitTopArr[i] += Math.round($(units[i]).offset().top - 70, 0);
}
console.log(unitTopArr)
for (let i = 0; i < tutorial_lists.length; i++) {
	$(tutorial_lists[i]).click(() => {
		// 获取需滚动目标的 Y 位置值
		console.log("tutorial nth: " + i);


		// 滚动 ing
		$('#tutorial').animate({
			scrollTop: unitTopArr[i]
		}, 300);

		// 高亮显示
		for (let j = 0; j < tutorial_lists.length; j++) {
			$(units[j]).css({
				'color': '#333'
			})
		}
		$(units[i]).css({
			'color': 'red'
		})
		setTimeout(() => {
			$(units[i]).css({
				'color': '#333'
			})
		}, 300)
	});
}

$(tutorialScroll).on('scroll', () => {
	let scrollTop = $(tutorialScroll).scrollTop() - 50;
	// console.log(scrollTop);
	for (let i = 0; i < tutorial_lists.length; i++) {
		if (scrollTop < (unitTopArr[i] + unitTopArr[i]) / 2) {
			for (let j = 0; j < tutorial_lists.length; j++) {
				$(tutorial_lists[j]).css({
					'color': '#666',
					"font-weight": "300"
				})
			}
			$(tutorial_lists[i]).css({
				'color': '#0084ff',
				"font-weight": "600"
			})
			break;
			localStorage.ScrollTemp = unitTopArr[i];
		}
	}
});

$(".directory_head").click(() => {
	tutorial_list_toggle(false);
});
$(".return").click(() => {
	tutorial_list_toggle(false);
});

// normal demo case (演示案例)
let slide_cards = $(".slide_card .cardBox");
for (let i = 0; i < slide_cards.length; i++) {
	$(slide_cards[i]).click(() => {
		if (i == 0)
			copyHandle(complete_command[4][2])
		else if (i == 1)
			copyHandle(complete_command[10][2])
	});
}




// 效果演示栏 card 填充

// 相对映射数组
let indexArr = [
	normal_index = [], 
	parameter_index = [],
	polarparameter_index = []
];
// 相对映射计数 for 相对映射数组
let countArr = [
	normal_count = 0,
	parameter_count = 0,
	polarparameter_count = 0
];

// 遍历 - 分类统计
for (let i = 0; i < complete_command.length; i++ ) {
	
	let cmd = complete_command[i][2];
	
	if (/\bnormal\b/.test(cmd)) {
		indexArr[0][countArr[0] ++] = i;
		
	} else if (/\bparameter\b/.test(cmd) || /\btickparameter\b/.test(cmd) || /\brgbaparameter\b/.test(cmd) || /\btickrgbaparameter\b/.test(cmd)) {
		indexArr[1][countArr[1] ++] = i;
		
	} else if (/\bpolarparameter\b/.test(cmd) || /\btickpolarparameter\b/.test(cmd) || /\brgbapolarparameter\b/.test(cmd) || /\btickrgbapolarparameter\b/.test(cmd)) {
		indexArr[2][countArr[2] ++] = i;
	}
	
}
// 映射结果
console.log(
	indexArr[0], 
	indexArr[1], 
	indexArr[2]
)

let normal_bar = $(".slide_card:eq(0) .slide_area");
let parameter_bar = $(".slide_card:eq(1) .slide_area");
let polarparameter_bar = $(".slide_card:eq(2) .slide_area");

// 遍历输出 - 统计数据至 tutorial 类
for (let i = 0; i < indexArr.length; i++) {
	for (let j = 0; j < indexArr[i].length; j++) {
		
		// 定位作者空间链接
		let author_link;
		for (let k = 0; k < authors.length; k++) {
			if (complete_command[indexArr[i][j]][0] == authors[k][0]) {
				author_link = authors[k][1];
				// console.log(author_link)
			}
		}
		if (i == 0) {
			$(normal_bar).append(caseSkeleton(i, j, author_link))
		} else if (i == 1) {
			$(parameter_bar).append(caseSkeleton(i, j, author_link))
		} else if (i == 2) {
			$(polarparameter_bar).append(caseSkeleton(i, j, author_link))
		}
		let cardBox0 = $(".slide_card .slide_area:eq(0) .cardBox");
		let cardBox1 = $(".slide_card .slide_area:eq(1) .cardBox");
		let cardBox2 = $(".slide_card .slide_area:eq(2) .cardBox");
		
		// 复制指令功能
		$(cardBox0[j]).on('click', () => {
		
			let copyText = complete_command[indexArr[0][j]][2];
			copyHandle(copyText)
			console.log('筛选映射： ' + indexArr[0][j])
		});
		
		$(cardBox1[j]).on('click', () => {
		
			let copyText = complete_command[indexArr[1][j]][2];
			copyHandle(copyText)
			console.log('筛选映射： ' + indexArr[1][j])
		});
		
		$(cardBox2[j]).on('click', () => {
		
			let copyText = complete_command[indexArr[2][j]][2];
			copyHandle(copyText)
			console.log('筛选映射： ' + indexArr[2][j])
		});
	}
	
}


function caseSkeleton(i, j, author_link) { // 数据骨架
	let case_txt = limit_stringLen(indexArr[i][j]);
	let case_skeleton = `
		<div class="cardBox bar">
			<div class='card' style="background-image: url('img/card/${ indexArr[i][j] }.jpg');">
				<h3>单击复制</h3>
			</div>
			<p class="complete_name">${ complete_command[indexArr[i][j]][1] }</p>
			<p style="text-indent: 8px!important;margin-top: 3px!important;">
				<span class="UP">UP</span>
				<a href="${ author_link }" title="查看 ${ complete_command[indexArr[i][j]][0] } 的空间" target="_blank">${ case_txt }</a>
				<span class="year">2023-6-18</span>
			</p> 
		</div>`
		
	return case_skeleton;
}

