// right 指令输出窗口的复制事件
let outputs = $(".output_destination")
var copyTemp = 0;
for(let i = 0;i <= outputs.length;i ++) {
	$(outputs[i]).click(() => {
		if (cmd_build_null == true) 
		{
			//var ct = $(outputs[i]).html();
			copyHandle(command);
		}
		else 
		{
		 	Messagebox("请先缔造您的指令","alert");
		}
	})
}