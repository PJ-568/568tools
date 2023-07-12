// expression input text 聚/失焦清空文字事件
let expression = $(".expression");
let expression_id;
for(let i = 0;i <= expression.length;i ++) {
	var temp_value
	$(expression[i]).focus(() => {
		temp_value = $(expression[i]).val();
		$(expression[i]).attr("value","");
	});
	$(expression[i]).blur(() => {
		$(expression[i]).attr("value", temp_value);
	});

	// expression 聚/失焦显示提示板 事件
	// 聚焦 显示
	$(expression[i]).focus(() => {
		expression_id = $(expression[i] ).attr("id")
		console.log(expression_id)
		$(hideExpression[i]).css({"transform": "scale(1)",'pointer-events':'all',"transition": "0ms","opacity": "1"})
		
		speed_hideExpression_and_hideExpression_pos(0);
	})
	// 失焦 隐藏
	$(expression[i]).blur(() => {
		setTimeout(() => {
			$(hideExpression[i]).css({"transform": "scale(.9)",'pointer-events':'none',"transition": "200ms","opacity": "0"})
		}, 100);
	})
}


// speed_expression input text 聚/失焦清空文字事件
let speed_expression = $(".speed_expression");
let speed_expression_id;
for(let i = 0;i <= speed_expression.length;i ++) {
	var temp_value
	$(speed_expression[i]).focus(() => {
		temp_value = $(speed_expression[i]).val();
		$(speed_expression[i]).attr("value","");
	});
	$(speed_expression[i]).blur(() => {
		$(speed_expression[i]).attr("value", temp_value);
	});

	// speed_expression 聚/失焦显示提示板 事件
	// 聚焦 显示
	$(speed_expression[i]).focus(() => {
		speed_expression_id = $(speed_expression[i] ).attr("id")
		console.log(speed_expression_id)
		$(speed_hideExpression[i]).css({"transform": "scale(1)",'pointer-events':'all',"transition": "0ms","opacity": "1"})
		

		speed_hideExpression_and_hideExpression_pos(-305);
	})
	// 失焦 隐藏
	$(speed_expression[i]).blur(() => {
		setTimeout(() => {
			$(speed_hideExpression[i]).css({"transform": "scale(0.9)",'pointer-events':'none',"transition": "200ms","opacity": "0"})
		}, 100);
	})
}



let speed_hideExpression = $("*#speed_hideExpression");
let speed_hideExpression_li = $("#speed_hideExpression ul li");
let hideExpression = $("*#hideExpression");
let hideExpression_li = $("#hideExpression ul li");


// 在表达式选项版中获取 value 速度表达式
for (let i = 0;i <= speed_hideExpression_li.length;i ++) {
	$(speed_hideExpression_li[i]).click(() => {
		let value = $(speed_hideExpression_li[i]).attr("value");
		console.log(value);
		$("#"+speed_expression_id).attr("value", value)
	})
}
for (let i = 0;i <= hideExpression_li.length;i ++) {
	$(hideExpression_li[i]).click(() => {
		let value = $(hideExpression_li[i]).attr("value");
		console.log(value);
		$("#"+expression_id).attr("value", value)
	})
}
