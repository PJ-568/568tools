
// 1.12.2
var old_particles = [
	['largeexplode','大型爆炸'],
	['hugeexplosion','巨型爆炸'],
	['fireworksSpark','烟花颗粒'],
	['bubble','水中气泡'],
	['splash','喷溅水花'],
	['wake','水准波纹'],
	['suspended','水准颗粒'],
	['depthsuspend','虚空粒子'],
	['crit','物理暴击'],
	['magicCrit','魔法暴击'],
	['smoke','黑烟'],
	['largesmoke','大型黑烟'],
	['spell','持续药水颗粒'],
	['instantSpell','瞬间药水颗粒'],
	['mobSpell','状态效果颗粒'],
	['mobSpellAmbient','信标效果颗粒'],
	['witchMagic','女巫颗粒'],
	['dripWater','方块溅水'],
	['dripLava','方块溅岩浆'],
	['angryVillager','村民愤怒'],
	['happyVillager','村民喜悦'],
	['townaura','菌丝颗粒'],
	['note','音符颗粒'],
	['portal','传送门颗粒'],
	['enchantmenttable','附魔台符文'],
	['flame','火苗颗粒'],
	['lava','岩浆颗粒'],
	['footstep','脚印'],
	['reddust','红石充能'],
	['snowballpoof','雪球颗粒'],	
	['slime','史莱姆颗粒'],
	['heart','爱心'],
	['barrier','屏障'],
	['cloud','云朵'],
	['snowshovel','血傀儡生成'],
	['droplet','下雪颗粒'],
	['mobappearance','远古守卫者的注视'],
	['endRod','末地烛颗粒'],
	['dragonbreath','末影龙吐息粒子'],
	['damageIndicator','玩家造成伤害粒子'],
	['sweepAttack','剑气'],
	['fallingdust','落沙'],
	['blockcrack','摧毁方块'],
	['blockdust','跌落粒子'],
	['iconcrack','物品碎裂粒子'],
	['spit','羊驼攻击'],
	['totem','不死图腾']
];

// 1.16.5
var new_particles = [
	["ambient_entity_effect","药水"],
	["angry_villager","村民愤怒"],
	["ash","粉尘灰"],
	["barrier","屏障"],
	["bubble","泡沫"],
	["bubble_column_up","气泡柱向上"],
	["bubble_pop","泡泡流行"],
	["campfire_cosy_smoke","篝火舒适的烟雾"],
	["campfire_signal_smoke","篝火信号烟雾"],
	["cloud","云"],
	["composter","堆肥机粒子"],
	["crimson_spore","深红孢子"],
	["crit","暴击"],
	["current_down","当前下降"],
	["damage_indicator","损坏指示器"],
	["dolphin","海豚"],
	["dragon_breath","龙息"],
	["dripping_honey","蜂蜜滴"],
	["dripping_lava","岩浆滴"],
	["dripping_obsidian_tear","哭泣的黑曜石滴"],
	["dripping_water","水滴"],
	["dust","灰尘"],
	["effect","药水2"],
	["elder_guardian","老守望者注视"],
	["enchant","附魔台符文"],
	["enchanted_hit","附魔命中"],
	["end_rod","末地烛"],
	["entity_effect","实体效果"],
	["explosion","爆炸"],
	["explosion_emitter","爆炸发射"],
	["falling_dust","尘灰滴落"],
	["falling_honey","蜂蜜滴落"],
	["falling_lava","岩浆滴落"],
	["falling_nectar","蜜汁滴落"],
	["falling_obsidian_tear","哭泣的黑曜石滴落"],
	["falling_water","水滴落"],
	["firework","烟花颗粒"],
	["fishing","钓鱼水花"],
	["flame","火焰颗粒"],
	["flash","闪光"],
	["chappy_villager","村民快乐"],
	["heart","爱心"],
	["instant_effect","白色颗粒"],
	["item_slime","史莱姆粒子"],
	["item_snowball","雪球粒子"],
	["landing_honey","蜂蜜落下"],
	["landing_lava","岩浆落下"],
	["landing_obsidian_tear","哭泣的黑曜石落下"],
	["large_smoke","大烟"],
	["lava","岩浆颗粒"],
	["mycelium","菌丝颗粒"],
	["nautilus","鹦鹉螺"],
	["note","乐符"],
	["poof","死亡烟雾"],
	["portal","下坠的下界门粒子"],
	["rain","雨"],
	["reverse_portal","悬停的下界门粒子"],
	["smoke","烟"],
	["sneeze","打喷嚏"],
	["soul","灵魂颗粒"],
	["soul_fire_flame","灵魂火焰"],
	["spit","羊驼吐痰"],
	["splash","溅起的水花"],
	["squid_ink","鱿鱼墨水"],
	["sweep_attack","扫荡剑气"],
	["totem_of_undying","不朽的图腾"],
	["underwater","水下气泡"],
	["warped_spore","翘曲孢子颗粒"],
	["white_ash","白灰颗粒"],
	["witch","女巫粒子"]
];






var authors = [
	[`OCEAN`, `https://space.bilibili.com/693976733?spm_id_from=333.1007.0.0`],
	[`Junior_Mo`,`https://www.mcmod.cn/author/25217.html`],
	[`故知`, `https://space.bilibili.com/445940350?spm_id_from=333.999.0.0`],
	
];
// colorblock 指令
var complete_command = [
	// 【作者，名称，指令，地址】 
	[
		`Junior_Mo`, 
		`正方体`, 
		`particleex conditional minecraft:end_rod ~ ~1 ~ 0 1 1 1 0 0 0 0.5 0.5 0.5 '(abs(y)==0.5&!(abs(z)<0.5))|(abs(x)==0.5&(!(abs(z)<0.5)|!(abs(y)<0.5)))' 0.1 0 'vy=0.01' 1.0 null`, 
		authors[1][1]
	],
	[
		`OCEAN`, 
		'立体球', 
		`particleex polarparameter minecraft:firework ~ ~2 ~ 0 1 0 1 0 0 0 0 550 's1=t;s2=t/50;dis=t/10'`, 
		authors[0][1]
	],
	[
		`Junior_Mo`, 
		'锐角星型', 
		`particleex parameter minecraft:end_rod ~ ~4 ~ 0 1 1 1 0 0 0 -3082 3082 'a=5;u=floor(t/78.5)/25;v=t%157/25;x=a*(cos(u)*cos(v))^3;y=a*(sin(u)*cos(v))^3;z=a*sin(v)^3' 1 0 'a=0.05;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0.1,,z*2*sin(a))' 0.1 0`, 
		authors[1][1]],
	[
		`OCEAN`, 
		'旋转的球体', 
		`particleex polarparameter minecraft:end_rod ~ ~3 ~ 1 1 1 1 0 0 0 -100.0 100.0 's1,s2,dis=t*10,t*PI/200,10' 0.1 0 'a=0.05;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0.1,,z*2*sin(a));cr=sin(t/7)/2+0.5;cg=sin(t/5)/2+0.5;cb=sin(t/3)/2+0.5' 1.0 null`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'粒子缠绕', 
		`particleex normal minecraft:end_rod ~ ~1 ~ 0.5 0 0.5 1 0 0. 0 10 5 5 500 200 'a=0.08;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0,,z*2*sin(a))' 1.0 null`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'心形曲线', 
		`particleex polarparameter minecraft:end_rod ~ ~17 ~ 1 1 1 1 0 0 0 -100.0 100.0 'dis=t/5;s1=t/7;s2'`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'围圈', 
		`particleex polarparameter minecraft:end_rod ~ ~2 ~ 0 1 1 1 0 0 0 -100.0 100.0 's1,s2,dis=t*10,t*PI/2000,10' 0.1 0 'a=-0.05;(vx,,vz)=(-sin(a),0,-cos(a),,cos(a),0,-sin(a))*(x*2*sin(a),,0.1,,z*2*sin(a))' 1.0 null`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'竖立的圆', 
		`particleex polarparameter minecraft:end_rod ~ ~2 ~ 0.1 1 1 1 0 0 0 -10.0 10.0 'dis=1;s1=1;s2=t' 0.1 0 0 1.0 null`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'散开的圆', 
		`particleex polarparameter minecraft:end_rod ~ ~1 ~ 0.1 1 1 1 0 0 0 -10.0 10.0 'dis=2;s1=2*t;s2=3' 0.1 0 'i=0.1;(vx,vy,vz)=(x*i,y*i,z*i)' 1.0 null`, 
		authors[0][1]],
	[
		`故知`, 
		'菊型球', 
		`particleex rgbapolarparameter minecraft:end_rod ~ ~5 ~ 0 0 0 -60.0 65.0 's1,s2,dis=t*0.2,t*PI/3.1415926,5;cr,cg,cb=sin(t/7)/4+0.75,sin(t/5)/4+0.75,sin(t/3)/4+0.75;s1=s1*dis;s2=s2*dis' 0.1 0 0 1.0 null`, 
		authors[2][1]],
	[
		`OCEAN`, 
		'粒子升华', 
		`particleex normal minecraft:end_rod ~ ~-10 ~ .2 .5 1 1 0 1.5 0 10 5 10 500 0 null`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'七芒星', 
		`particleex tickparameter minecraft:end_rod ~ ~1 ~ .1 1 .6 1 0 0 0 0.0 1000.0 'x=(0.07*sin(0.04*t+0.225)+-0.1*sin(-0.03*t+0.225))*50;z=(0.07*cos(0.04*t+0.225)+-0.1*cos(-0.03*t+0.225))*50' 1 25 0 'vy=0.0'`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'桃心', 
		`particleex tickparameter minecraft:end_rod ~ ~3 ~ 0.6 0.2 1 1 0 0 0 -3.0 3.0 'x=(16*pow(sin(t),3))/7;y=(13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t))/7' 0.01 20 0 'vy=0.0'`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'V字形', 
		`particleex tickparameter minecraft:end_rod ~ ~1 ~ 0.1 1 1 1 0 0 0 -10.0 10.0 'x=t;y=abs(t)' 0.1 10 0 'vy=0.0'`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'触手状', 
		`particleex polarparameter minecraft:end_rod ~ ~1 ~ 1 0.1 1 1 0 0 0 -10.0 10.0 's1=t;s2=0.2;dis=tan(t*6)+5)' 0.01 0 'vy=0.0'`, 
		authors[0][1]],
	[
		`OCEAN`, 
		'星星', 
		`particleex parameter minecraft:end_rod ~ ~1 ~ 1 .5 0 1 0 0 0 0.0 1000.0 'x=(0.06*sin(0.02*t+1)+-0.03*sin(-0.03*t+1))*20;z=(0.06*cos(0.02*t+1)+-0.03*cos(-0.03*t+1))*20' 2 0 'vy=0'`, 
		authors[0][1]],
	[
		`Junior_Mo`, 
		'螺旋', 
		`particleex tickparameter minecraft:end_rod ~ ~ ~ 1 1 1 1 0 0 0 0.0 30.0 'y=t/4;x=sin(t);z=cos(t)' 0.1 10 0 'cr=sin(t/7)/2+0.5;cg=sin(t/5)/2+0.5;cb=sin(t/3)/2+0.5'`, 
		authors[1][1]],
	[
		`OCEAN`, 
		'金葵绽放', 
		`particleex polarparameter minecraft:end_rod ~ ~1 ~ 1 1 0.2 1 0 0 0 -2.0 10.0 's1=t*10;s2=t*PI/20;dis=(random()+2)/10' 0.1 0 'i=0.8*0.7^t;(vx,vy,vz)=(x*i,y*i,z*i)'`, 
		authors[0][1]],
	
	// wait add...];



// together complete
var togetherComplete_commands = [
	[
		`地狱之眼`
	],
	[
		`开场命令*4`, 
		`particleex parameter minecraft:end_rod -23 11 112 1 0.3 1 1 0 0 0 -10.0 10.0 "s=12;x=s*sin(t)^3/100;y=s/3*cos(t)^3/100" 0.01 10 "i=4.7*0.5^t;(vx,vy,vz)=(x*i,y*i,z*i)"`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.2 1 1 0 0 0 -10.0 10.0 "s=2;x=cos(t)^3/2*s/100;y=sin(t)^3*s/100" 0.05 8 "i=5*0.48^t;(vx,vy,vz)=(x*i,y*i,z*i)"`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.1 1 1 0 0 0 -10.0 10.0 "s=2.4;x=sin(t)*s/100;y=cos(t)*s/100" 0.1 10 "i=5*0.47^t;(vx,vy,vz)=(x*i,y*i,z*i)"`,
		`particleex normal minecraft:end_rod -23 11 112 1 .1 1 1 0 0 0 .1 .1 .1 500 0 "i=2*0.7^t;(vx,vy,vz)=(x*i,y*i,z*i)"`
	],
	[
		`持续命令*4`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.3 1 1 0 0 0 -10.0 10.0 "s=12;x=s*sin(t)^3;y=s/3*cos(t)^3" 0.01 8 "i=0.1*random();(vx,vy,vz)=(x*i,y*i,z*i)"`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.1 1 1 0 0 0 -10.0 10.0 "s=2.4;x=sin(t)*s;y=cos(t)*s" 0.1 5 "vy=0.1*y*random()"`,
		`particleex normal minecraft:end_rod ~ ~1 ~ 0.5 0 0.5 1 0 0 0 10 5 10 5 0 "a=0.1;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0,,z*2*sin(a))" 1.0 null`,
		`particleex parameter minecraft:end_rod -23 11.1 112 1 0.2 1 1 0 0 0 -10.0 10.0 "s=2;x=cos(t)^3/2*s;y=sin(t)^3*s" 0.05 1000 "s=0.2;vx=sin(floor(t/5)-1)/35;vy=cos(t/5)/35"`
	],
	[
		`收场命令*4`,
		`particleex clearparticle`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.3 1 1 0 0 0 -10.0 10.0 "s=12;x=s*sin(t)^3;y=s/3*cos(t)^3" 0.01 5 "i=-.5;(vx,vy,vz)=(x*i,y*i,z*i)"`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.1 1 1 0 0 0 -10.0 10.0 "s=2.4;x=sin(t)*s;y=cos(t)*s" 0.1 5 "i=-.5;(vx,vy,vz)=(x*i,y*i,z*i)"`,
		`particleex parameter minecraft:end_rod -23 11 112 1 0.2 1 1 0 0 0 -10.0 10.0 "s=2;x=cos(t)^3/2*s;y=sin(t)^3*s" 0.05 5 "i=-.5;(vx,vy,vz)=(x*i,y*i,z*i)"`
	]
];
















// colorblock作品填充

let complete_commandCards;
for (let i = 0;i < complete_command.length;i ++) {
	
	let authors_txt;  // 结果文本
	
	authors_txt = limit_stringLen(i);
	
	let txt = `<div class="cardBox">
					<div class='card'>
						<h3>单击复制</h3>
					</div>
					<p class="complete_name">${complete_command[i][1]}</p>
					<p><span class="UP">UP</span><a id="authors_text" href="${complete_command[i][3]}" title="查看 ${complete_command[i][0]} 的空间" target="_blank">${authors_txt}</a><span class="year">2023-6-18</span></p>
				</div>`;
	$(".chunks-resource-box:eq(1) .project").append(txt)
	
	
}

// $(".chunks-resource-box:eq(1) .project").append(`<div class="cardBox"><img src="img/card/end.jpg"></div>`)
$(".chunks-resource-box:eq(1) .project").append("<div class='ENDText'>-- END --</div>");

complete_commandCards = $(".chunks-resource-box:eq(1) .card");
for (let i = 0;i < complete_command.length;i ++ ) {
	$(complete_commandCards[i]).click(() => {
		console.log(i)
		copyHandle(complete_command[i][2]);
	})
}


function limit_stringLen(nth) {	// 限制 作者名称的显示长度
	
	let authors_txt;
	let maxLength = 8; // 指定的字数阈值
	let stringLen = 0; 
	let minus = 0;  // 与中文占位不同所产生的差值
	
	for (let j = 0; j < complete_command[nth][0].length; j ++) {
		// 英文判断
		let pattern = /[a-zA-Z]/;  
		let isEnglish = pattern.test(complete_command[nth][0][j]);
		if (isEnglish) {
			stringLen ++;
		} else {
			stringLen += 2;
			if (stringLen >= 4) {
				minus ++;
			}
		}
	}
		
	if (stringLen > maxLength) {
		authors_txt = complete_command[nth][0].slice(0, (maxLength - minus)) + "...";
		console.log(authors_txt);
	} else {
		authors_txt = complete_command[nth][0];
	}
	return authors_txt;
}

