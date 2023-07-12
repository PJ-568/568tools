function output_cmd_normal() {  // 1.12.2原版指令输出函数
	var axis_x = $("#axis_x").val();	
	var axis_y = $("#axis_y").val();	
	var axis_z = $("#axis_z").val();
		
	var move_x = $("#move_x").val();	
	var move_y = $("#move_y").val();	
	var move_z = $("#move_z").val();
	
	var cmdName = $("#cmdName_select").find("option:selected").val();
	var spread_speed = $("#spread_speed").val();
	var particle_num = $("#particle_num").val();
	var vision_range
	//取 radio 的选择的value值
	var radio = $("#radio_vision_range #vision_range");
	for (i=0; i<radio.length; i++) {
		if (radio[i].checked) {
			vision_range = "force"
		}else {
			vision_range = "normal"
		}
	}

	if (axis_x == '') axis_x = '';
	if (axis_y == '') axis_y = 1;
	if (axis_z == '') axis_z = '';

	if (move_x == '') move_x = 0;
	if (move_y == '') move_y = 0;
	if (move_z == '') move_z = 0;


	var cmd = "/particle " + cmdName + " ~" + axis_x + " ~" + axis_y + " ~" + axis_z + " " + move_x + " " +
		move_y + " " + move_z + " " + spread_speed + " " + particle_num + " " + vision_range
	
	
	$(".output_destination").html("");  // 清空
	
	$(".output_destination").append(cmd)
	console.log("成功输出：" + cmd)
 	command = cmd;
	output_cmd(cmd)
	
	if (localStorage.setting2 == 1)
		copyHandle(cmd);

	$(".output_destination").css({"background-image": "url('img/copy_background.png')"})
}


// 确定生成键
var cmd_build_null = false;  // 复制时检查是否已生成指令
$("#cmd_build").click(() => {
	output_cmd_normal();
	
	cmd_build_null = true;
});