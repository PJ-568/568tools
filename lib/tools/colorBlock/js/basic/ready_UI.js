windowResize(window.innerWidth);
window.addEventListener("resize", () => {
	var width = window.innerWidth;
	
	// alert(width)
	windowResize(width);
})

// 窗口自动适应
function windowResize(width) {
	if (width < 1000) {
		$(".right_box").css({"width": width + "px","height": "50px", "transform": "translateY(-50%)"})
		$(".output_destination").css({"height": "190px"});
		$(".left_box").css({ "transform": "translateX(" + (width - 582/0) / 2 + "px)"})
		
		$(".canvas").css({"width": "250px","height": "250px", "transform": "translateX(110px)"})
		$(".fuliye_cmdOut").css({"width":"40%","top":" 0","right":"0%"})
		$(".Fourier_copyBtn").css({"width": "300px","bottom":"40%"})
		$(".Fourier_copyBtn:eq(0)").css({"left": "300px", "transform":"translateY(-60px)"})
		$(".Fourier_copyBtn:eq(1)").css({"right": "-350px"})
	} else {
		$(".output_destination").css({"height": "96%"});
		$(".right_box").css({"width": "380px","height": "530px", "transform": "translateY(0%)"})
		$(".left_box").css({"transform": "translateX(0%)"})
		
		$(".canvas").css({"width": "100%","height": "100%", "transform": "translateX(0px)"})
		$(".fuliye_cmdOut").css({"width":"50%","bottom":"0%"})
		$(".x_axie, .y_axie").css({"transform": "0px"})
		$(".Fourier_copyBtn").css({"width": "48%", "bottom":"1%", "transform":"translateY(0px)"})
		$(".Fourier_copyBtn:eq(0)").css({"left": "1%"})
		$(".Fourier_copyBtn:eq(1)").css({"right": "1%"})
	}
}
