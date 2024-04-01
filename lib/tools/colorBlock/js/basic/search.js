// 模糊搜索
$(document).ready(function() {
	$(".searchInput").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		var reg = /^[\u4e00-\u9fa5]+$/;
		console.log(value + reg.test(value))
		
		if (reg.test(value) == true) {
			$("*#Copy_to_value").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		} else if (value == "") {
			$("*#Copy_to_value").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		}
		
		
	});
});
//chunksResourceBoxs[0]