$(document).ready((()=>{let t,l,r=$("#fuliye_transform input");function o(){let t,a,d,i,e,l,o=0,n=0,c=0,h=0,v=0,M=0,f=0,g=0,p=0,m=0,b=0,_=0,x=0,y=0,k=0,F=0,R=0,w=0,B=0,C=0,H=0;t=$(r[0]).val(),a=$(r[1]).val(),d=$(r[2]).val(),i=$(r[3]).val(),e=$(r[4]).val(),l=$(r[5]).val(),s>=3&&(o=$(r[6]).val(),n=$(r[7]).val(),c=$(r[8]).val()),s>=4&&(h=$(r[9]).val(),v=$(r[10]).val(),M=$(r[11]).val()),s>=5&&(f=$(r[12]).val(),g=$(r[13]).val(),p=$(r[14]).val()),s>=6&&(m=$(r[15]).val(),b=$(r[16]).val(),_=$(r[17]).val()),s>=7&&(x=$(r[18]).val(),y=$(r[19]).val(),k=$(r[20]).val()),s>=8&&(F=$(r[21]).val(),R=$(r[22]).val(),w=$(r[23]).val()),s>=9&&(B=$(r[24]).val(),C=$(r[25]).val(),H=$(r[26]).val()),u(t,a,d,i,e,l,o,n,c,h,v,M,f,g,p,m,b,_,x,y,k,F,R,w,B,C,H),console.log("a："+t,a,d+"\nb："+i,e,l+"\nc："+o,n,c+"\nd："+h,v,M+"\ne："+f,g,p+"\nf："+m,b,_+"\ng："+x,y,k+"\nh："+F,R,w+"\ni："+B,C,H)}$(r).on("input",(()=>{o()}));let n=$(".preinstall .useParm");for(let t=0;t<=n.length;t++)$(n[t]).click((()=>{0==t?(a=4,ad=7,ai=2.25,b=-3,bd=-10,bi=2.25,c=cd=ci=0,d=dd=di=0,e=ed=ei=0,f=fd=fi=0,g=gd=gi=0,h=hd=hi=0,t=id=ii=0):1==t?(a=-9,ad=7,ai=0,b=3,bd=-7,bi=0,c=cd=ci=0,d=dd=di=0,e=ed=ei=0,f=fd=fi=0,g=gd=gi=0,h=hd=hi=0,t=id=ii=0):2==t?(a=-12,ad=10,ai=0,b=-6,bd=2,bi=0,c=cd=ci=0,d=dd=di=0,e=ed=ei=0,f=fd=fi=0,g=gd=gi=0,h=hd=hi=0,t=id=ii=0):3==t&&(a=-4,ad=15,ai=0,b=7,bd=-2,bi=0,c=cd=ci=0,d=dd=di=0,e=ed=ei=0,f=fd=fi=0,g=gd=gi=0,h=hd=hi=0,t=id=ii=0),v(a,ad,ai,b,bd,bi,c,cd,ci,d,dd,di,e,ed,ei,f,fd,fi,g,gd,gi,h,hd,hi,id,ii),u(a,ad,ai,b,bd,bi,c,cd,ci,d,dd,di,e,ed,ei,f,fd,fi,g,gd,gi,h,hd,hi,t,id,ii)}));function u(a,d,i,e,r,o,n,c,u,h,v,M,f,g,p,m,b,_,x,y,k,F,R,w,B,C,H){a/=100,d/=100,i/=10,e/=100,r/=100,o/=10,n/=100,c/=100,u/=10,h/=100,v/=100,M/=10,f/=100,g/=100,p/=10,m/=100,b/=100,_/=10,x/=100,y/=100,k/=10,F/=100,R/=100,w/=10,B/=100,C/=100,H/=10,$(".canvas .dot").remove();let z=$(document).width()/2;for(let t=0;t<=1e3;t++){let l=(d*Math.sin(a*t+i)+r*Math.sin(e*t+o)+c*Math.sin(n*t+u)+v*Math.sin(h*t+M)+g*Math.sin(f*t+p)+b*Math.sin(m*t+_)+y*Math.sin(x*t+k)+R*Math.sin(F*t+w)+C*Math.sin(B*t+H))*z,s=(d*Math.cos(a*t+i)+r*Math.cos(e*t+o)+c*Math.cos(n*t+u)+v*Math.cos(h*t+M)+g*Math.cos(f*t+p)+b*Math.cos(m*t+_)+c*Math.cos(x*t+k)+R*Math.cos(F*t+w)+C*Math.cos(B*t+H))*z;txt="<div class='dot' style='margin-top:"+l+"px;margin-left:"+s+"px;'></div>",$(".canvas").append(txt)}let D="x=("+d+"*sin("+a+"*t+"+i+")+"+r+"*sin("+e+"*t+"+o+")"+(s>2?"+"+c+"*sin("+n+"*t+"+u+")":"")+(s>3?"+"+v+"*sin("+h+"*t+"+M+")":"")+(s>4?"+"+g+"*sin("+f+"*t+"+p+")":"")+(s>5?"+"+b+"*sin("+m+"*t+"+_+")":"")+(s>6?"+"+y+"*sin("+x+"*t+"+k+")":"")+(s>7?"+"+R+"*sin("+F+"*t+"+w+")":"")+(s>8?"+"+C+"*sin("+B+"*t+"+H+")":"")+")*50;z=("+d+"*cos("+a+"*t+"+i+")+"+r+"*cos("+e+"*t+"+o+")"+(s>2?"+"+c+"*cos("+n+"*t+"+u+")":"")+(s>3?"+"+v+"*cos("+h+"*t+"+M+")":"")+(s>4?"+"+g+"*cos("+f+"*t+"+p+")":"")+(s>5?"+"+b+"*cos("+m+"*t+"+_+")":"")+(s>6?"+"+y+"*cos("+x+"*t+"+k+")":"")+(s>7?"+"+R+"*cos("+F+"*t+"+w+")":"")+(s>8?"+"+C+"*cos("+B+"*t+"+H+")":"")+")*50";t="/particleex tickparameter minecraft:end_rod ~ ~1 ~ .1 1 1 1 0 0 0 0.0 1000.0 '"+D+"' 1 25 0 'vy=0.0'",l="/particleex tickparameter endRod ~ ~1 ~ .1 1 1 1 240 0 0 0 0.0 1000.0 "+D+" 1 25 0 vy=0.0"}function v(t,a,l,o,n,u){$(r[0]).attr("value",Math.round(t,0)),$(r[1]).attr("value",Math.round(a,0)),$(r[2]).attr("value",Math.round(l,0)),$(r[3]).attr("value",Math.round(o,0)),$(r[4]).attr("value",Math.round(n,0)),$(r[5]).attr("value",Math.round(u,0)),$(r[6]).attr("value",Math.round(c,0)),$(r[7]).attr("value",Math.round(cd,0)),$(r[8]).attr("value",Math.round(ci,0)),$(r[9]).attr("value",Math.round(d,0)),$(r[10]).attr("value",Math.round(dd,0)),$(r[11]).attr("value",Math.round(di,0)),$(r[12]).attr("value",Math.round(e,0)),$(r[13]).attr("value",Math.round(ed,0)),$(r[14]).attr("value",Math.round(ei,0)),$(r[15]).attr("value",Math.round(f,0)),$(r[16]).attr("value",Math.round(fd,0)),$(r[17]).attr("value",Math.round(fi,0)),$(r[18]).attr("value",Math.round(g,0)),$(r[19]).attr("value",Math.round(gd,0)),$(r[20]).attr("value",Math.round(gi,0)),$(r[21]).attr("value",Math.round(h,0)),$(r[22]).attr("value",Math.round(hd,0)),$(r[23]).attr("value",Math.round(hi,0)),$(r[24]).attr("value",Math.round(i,0)),$(r[25]).attr("value",Math.round(id,0)),$(r[26]).attr("value",Math.round(ii,0))}$("#Fourier_newCmd_copyBtn").click((()=>{copyHandle(t)})),$("#Fourier_oldCmd_copyBtn").click((()=>{copyHandle(l)})),$(".closeWindow").click((()=>{preinstall_toggle(!1)})),$(".preinstall .title").on("mousemove",(()=>{$(".preinstall").css("transition","0ms").draggable()}));let s=2,M=$("#fuliye_transform table tr");for(let t=3;t<=9;t++)$(M[t]).hide();$(".addRotor").click((()=>{s<9?(s++,$(M[s]).slideDown(0),$("#Fourier_prompt").text("")):$("#Fourier_prompt").text("抱歉，旋转因子仅拓展至8位 Σ( ° △ °|||)︴")})),$(".deleteRotor").click((()=>{if(s>=2){s--,$(M[s+1]).slideUp(0);for(let t=3*s;t<=r.length;t++)$(r[t]).val("0");o(),$("#Fourier_prompt").text("")}else $("#Fourier_prompt").text("旋转因子总得有一个吧？ (⊙ˍ⊙)")})),$(".addRotor, .deleteRotor").on("click",(()=>{console.log("rotorNum："+s);$("#fuliye_transform input")}))}));