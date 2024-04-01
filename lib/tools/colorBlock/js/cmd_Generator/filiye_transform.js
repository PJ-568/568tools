$(document).ready(() => {
	// y = (a*Math.sin(c*t) + b*Math.sin (d*t),a*cos(c*t) + b*Math.cos(d*t))
	let new_cmd;
	let old_cmd;
	
	
	let FLY_inputs = $("#fuliye_transform input");
	
	$(FLY_inputs).on('input', () => {
		FLY_inputsEvent()
	})
	
	function FLY_inputsEvent() {
		let a,ad,ai, b,bd,bi, c = 0,cd = 0,ci = 0,  d = 0,dd = 0,di = 0, e = 0,ed = 0,ei = 0, f = 0,fd = 0,fi = 0, g = 0,gd = 0,gi = 0, h = 0,hd = 0,hi = 0, i = 0,id = 0,ii = 0;
		a = $(FLY_inputs[0]).val()
		ad = $(FLY_inputs[1]).val()
		ai = $(FLY_inputs[2]).val()
			
		b = $(FLY_inputs[3]).val()
		bd = $(FLY_inputs[4]).val()
		bi = $(FLY_inputs[5]).val()
		// if (Number(a) >= )
		if (rotorNum >= 3) {
			c = $(FLY_inputs[6]).val()
			cd = $(FLY_inputs[7]).val()
			ci = $(FLY_inputs[8]).val()
		}
		if (rotorNum >= 4) {
			d = $(FLY_inputs[9]).val()
			dd = $(FLY_inputs[10]).val()
			di = $(FLY_inputs[11]).val()
		}
		if (rotorNum >= 5) {
			e = $(FLY_inputs[12]).val()
			ed = $(FLY_inputs[13]).val()
			ei = $(FLY_inputs[14]).val()
		}
		if (rotorNum >= 6) {
			f = $(FLY_inputs[15]).val()
			fd = $(FLY_inputs[16]).val()
			fi = $(FLY_inputs[17]).val()
		}
		if (rotorNum >= 7) {
			g = $(FLY_inputs[18]).val()
			gd = $(FLY_inputs[19]).val()
			gi = $(FLY_inputs[20]).val()
		}
		if (rotorNum >= 8) {
			h = $(FLY_inputs[21]).val()
			hd = $(FLY_inputs[22]).val()
			hi = $(FLY_inputs[23]).val()
		}
		if (rotorNum >= 9) {
			i = $(FLY_inputs[24]).val()
			id = $(FLY_inputs[25]).val()
			ii = $(FLY_inputs[26]).val()
		}
		
			
		output_to_canvas(a,ad,ai, b,bd,bi, c,cd,ci,  d,dd,di, e,ed,ei, f,fd,fi, g,gd,gi, h,hd,hi, i,id,ii);
			
		console.log("a：" + a,ad,ai + "\nb：" + b,bd,bi  + "\nc：" +c,cd,ci + "\nd：" +d,dd,di  + "\ne：" +e,ed,ei + "\nf：" +f,fd,fi + "\ng：" +g,gd,gi + "\nh：" +h,hd,hi + "\ni：" +i,id,ii)
		
	}
	
	// 傅里叶参数预设事件
	let PITbtns = $(".preinstall .useParm");
	for (let i = 0;i <= PITbtns.length;i ++) {
		$(PITbtns[i]).click(() => {
			if (i == 0) {
				a = 4; 		ad = 7; 	ai = 2.25;
				b = -3;	 	bd = -10; 	bi = 2.25;
				c = cd = ci = 0;
				d = dd = di = 0;
				e = ed = ei = 0;
				f = fd = fi = 0;
				g = gd = gi = 0;
				h = hd = hi = 0;
				i = id = ii = 0;
			} else if (i == 1) {
				a = -9; 	ad = 7; 	ai = 0;
				b = 3; 		bd = -7; 	bi = 0;
				c = cd = ci = 0;
				d = dd = di = 0;
				e = ed = ei = 0;
				f = fd = fi = 0;
				g = gd = gi = 0;
				h = hd = hi = 0;
				i = id = ii = 0;
			} else if (i == 2) {
				a = -12; 	ad = 10; 	ai = 0;
				b = -6; 	bd = 2; 	bi = 0;
				c = cd = ci = 0;
				d = dd = di = 0;
				e = ed = ei = 0;
				f = fd = fi = 0;
				g = gd = gi = 0;
				h = hd = hi = 0;
				i = id = ii = 0;
			} else if  (i == 3) {
				a = -4; 	ad = 15; 	ai = 0;
				b = 7;		bd = -2;	bi = 0;
				c = cd = ci = 0;
				d = dd = di = 0;
				e = ed = ei = 0;
				f = fd = fi = 0;
				g = gd = gi = 0;
				h = hd = hi = 0;
				i = id = ii = 0;
			}
			dataFull_In(a,ad,ai, b,bd,bi, c,cd,ci,  d,dd,di, e,ed,ei, f,fd,fi, g,gd,gi, h,hd,hi, i,id,ii)
			output_to_canvas(a,ad,ai, b,bd,bi, c,cd,ci,  d,dd,di, e,ed,ei, f,fd,fi, g,gd,gi, h,hd,hi, i,id,ii);
		})
	}
	/*
	(asin(ct)+bsin(dt), (acos(ct)+bcos(dt))
	a长度 ad
	b长度 bd
	c转速 a
	d转速 b
	*/
	
	
	// 绘制基本图像函数
	function output_to_canvas(a,ad,ai,  b,bd,bi,  c,cd,ci,  d,dd,di,  e,ed,ei,  f,fd,fi,  g,gd,gi,  h,hd,hi,  i,id,ii) {
		a /= 100;
		ad /= 100;
		ai /= 10;
		
		b /= 100;
		bd /= 100;
		bi /= 10;
		
		c /= 100;
		cd /= 100;
		ci /= 10;
		
		d /= 100;
		dd /= 100;
		di /= 10;
		
		e /= 100;
		ed /= 100;
		ei /= 10;
		
		f /= 100;
		fd /= 100;
		fi /= 10;
		
		g /= 100;
		gd /= 100;
		gi /= 10;
		
		h /= 100;
		hd /= 100;
		hi /= 10;
		
		i /= 100;
		id /= 100;
		ii /= 10;
		$(".canvas .dot").remove()
		
		let sacle = $(document).width()/2;
		
		for (let t = 0;t <= 1000;t ++) {
			let x = (ad*Math.sin(a*t+ai) + bd*Math.sin(b*t +bi) + cd*Math.sin(c*t +ci) + dd*Math.sin(d*t +di) + ed*Math.sin(e*t +ei) + fd*Math.sin(f*t +fi) + gd*Math.sin(g*t +gi) + hd*Math.sin(h*t +hi) + id*Math.sin(i*t +ii)) * sacle;
			let z = (ad*Math.cos(a*t+ai) + bd*Math.cos(b*t +bi) + cd*Math.cos(c*t +ci) + dd*Math.cos(d*t +di) + ed*Math.cos(e*t +ei) + fd*Math.cos(f*t +fi) + cd*Math.cos(g*t +gi) + hd*Math.cos(h*t +hi) + id*Math.cos(i*t +ii)) * sacle;
			// console.log(x,y)
			txt = "<div class='dot' style='margin-top:"+ x +"px;margin-left:"+ z +"px;'></div>"
			$(".canvas").append(txt);
		}
		
		// 生成color block指令
		
		let x3 = rotorNum > 2 ?  "+"+ cd + "*sin("+ c +"*t+"+ ci +")" : ''; 
		let z3 = rotorNum > 2 ?  "+"+ cd + "*cos("+ c +"*t+"+ ci +")" : '';
		let x4 = rotorNum > 3 ?  "+"+ dd + "*sin("+ d +"*t+"+ di +")" : ''; 
		let z4 = rotorNum > 3 ?  "+"+ dd + "*cos("+ d +"*t+"+ di +")" : '';
		let x5 = rotorNum > 4 ?  "+"+ ed + "*sin("+ e +"*t+"+ ei +")" : ''; 
		let z5 = rotorNum > 4 ?  "+"+ ed + "*cos("+ e +"*t+"+ ei +")" : '';
		let x6 = rotorNum > 5 ?  "+"+ fd + "*sin("+ f +"*t+"+ fi +")" : ''; 
		let z6 = rotorNum > 5 ?  "+"+ fd + "*cos("+ f +"*t+"+ fi +")" : '';
		let x7 = rotorNum > 6 ?  "+"+ gd + "*sin("+ g +"*t+"+ gi +")" : ''; 
		let z7 = rotorNum > 6 ?  "+"+ gd + "*cos("+ g +"*t+"+ gi +")" : '';
		let x8 = rotorNum > 7 ?  "+"+ hd + "*sin("+ h +"*t+"+ hi +")" : ''; 
		let z8 = rotorNum > 7 ?  "+"+ hd + "*cos("+ h +"*t+"+ hi +")" : '';
		let x9 = rotorNum > 8 ?  "+"+ id + "*sin("+ i +"*t+"+ ii +")" : ''; 
		let z9 = rotorNum > 8 ?  "+"+ id + "*cos("+ i +"*t+"+ ii +")" : '';
		
		let E = "x=("+ ad +"*sin("+ a +"*t+"+ ai +")+"+bd+"*sin("+ b +"*t+"+ bi +")"+ x3 + x4 + x5 + x6 + x7 + x8 + x9 +")*50;z=("+ ad +"*cos("+ a +"*t+"+ ai +")+"+ bd +"*cos("+ b +"*t+"+ bi +")"+ z3 + z4 + z5 + z6 + z7 + z8 + z9 +")*50";
		
		new_cmd = "/particleex tickparameter minecraft:end_rod ~ ~1 ~ .1 1 1 1 0 0 0 0.0 1000.0 '"+ E +"' 1 25 0 'vy=0.0'";
		old_cmd = "/particleex tickparameter endRod ~ ~1 ~ .1 1 1 1 240 0 0 0 0.0 1000.0 "+ E +" 1 25 0 vy=0.0";
		
	}
	
	// 数据填充函数
	function dataFull_In(a,ad,ai, b,bd,bi) {
		$(FLY_inputs[0]).attr('value',Math.round(a,0));
		$(FLY_inputs[1]).attr('value',Math.round(ad,0));
		$(FLY_inputs[2]).attr('value',Math.round(ai,0));
		$(FLY_inputs[3]).attr('value',Math.round(b,0));
		$(FLY_inputs[4]).attr('value',Math.round(bd,0));
		$(FLY_inputs[5]).attr('value',Math.round(bi,0));
		$(FLY_inputs[6]).attr('value',Math.round(c,0));
		$(FLY_inputs[7]).attr('value',Math.round(cd,0));
		$(FLY_inputs[8]).attr('value',Math.round(ci,0));
		$(FLY_inputs[9]).attr('value',Math.round(d,0));
		$(FLY_inputs[10]).attr('value',Math.round(dd,0));
		$(FLY_inputs[11]).attr('value',Math.round(di,0));
		$(FLY_inputs[12]).attr('value',Math.round(e,0));
		$(FLY_inputs[13]).attr('value',Math.round(ed,0));
		$(FLY_inputs[14]).attr('value',Math.round(ei,0));
		$(FLY_inputs[15]).attr('value',Math.round(f,0));
		$(FLY_inputs[16]).attr('value',Math.round(fd,0));
		$(FLY_inputs[17]).attr('value',Math.round(fi,0));
		$(FLY_inputs[18]).attr('value',Math.round(g,0));
		$(FLY_inputs[19]).attr('value',Math.round(gd,0));
		$(FLY_inputs[20]).attr('value',Math.round(gi,0));
		$(FLY_inputs[21]).attr('value',Math.round(h,0));
		$(FLY_inputs[22]).attr('value',Math.round(hd,0));
		$(FLY_inputs[23]).attr('value',Math.round(hi,0));
		$(FLY_inputs[24]).attr('value',Math.round(i,0));
		$(FLY_inputs[25]).attr('value',Math.round(id,0));
		$(FLY_inputs[26]).attr('value',Math.round(ii,0));
		
	}
	
	
	// 复制傅里叶指令
	$("#Fourier_newCmd_copyBtn").click(() => {copyHandle(new_cmd)})
	$("#Fourier_oldCmd_copyBtn").click(() => {copyHandle(old_cmd)})
	
	// 关闭参数预设
	$(".closeWindow").click(()=>{
		preinstall_toggle(false)
	})
	
	
	// 拖动面板
	$(".preinstall .title").on('mousemove', () => {
		$(".preinstall").css('transition','0ms').draggable();
	})
	
	
	
	// 添加 rotor(旋转子)事件
	
	let rotorNum = 2;
	let FLY_trs = $("#fuliye_transform table tr");
	//  初始化
	for (let i = 3;i <= 9;i++) {
		$(FLY_trs[i]).hide()
	}
	$(".addRotor").click(() => {
		if (rotorNum < 9) {  // 限制旋转因子 max:10
			rotorNum ++;
			$(FLY_trs[rotorNum]).slideDown(0);
			$("#Fourier_prompt").text("")
		} else 
			$("#Fourier_prompt").text("抱歉，旋转因子仅拓展至8位 Σ( ° △ °|||)︴")
	})
	$(".deleteRotor").click(() => {
		if (rotorNum >= 2) {  // 限制旋转因子 min:2
			rotorNum --;
			$(FLY_trs[rotorNum + 1]).slideUp(0);
			
			for (let i = (rotorNum) * 3;i <= FLY_inputs.length;i ++) {
				$(FLY_inputs[i]).val("0")
			}
			FLY_inputsEvent()
			$("#Fourier_prompt").text("")
		} else 
			$("#Fourier_prompt").text("旋转因子总得有一个吧？ (⊙ˍ⊙)")
	})
	// 实时监听
	$(".addRotor, .deleteRotor").on('click', () => {
		console.log("rotorNum：" + rotorNum)
		const FLY_inputs = $("#fuliye_transform input");
	})
})