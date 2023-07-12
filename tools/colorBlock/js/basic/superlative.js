var MessageboxTemp;

let Level_1_Tmep = 0;
let setoutTime = true;



// 资源目录焦点事件
var listUl_lis = $(".listUl li");
for (i = 0;i <= listUl_lis.length;i ++){
	$(listUl_lis[i]).before("<div class='focusPrint'></div>")
}
let focuss = $(".focusPrint");
