// 拷贝函数 for className == "copyValue"
document.addEventListener('click', (e) => {
	if(e.target.className == "copyValue")
	{
		copyHandle(e.target.id);
	}
})