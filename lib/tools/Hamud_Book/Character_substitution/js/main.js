function AA() {msg.info('请输入内容');}
function replaceChars() {
	var inputText = document.getElementById("inputText").value.toLowerCase();
	var outputOnerio = "";
	var outputTri = "";

	for (var i = 0; i < inputText.length; i++) {
		var char = inputText.charAt(i);

		// 使用 switch 语句将拉丁字母转换为对应的符号
		switch (char) {
            case "-":
				outputOnerio += " ";
				outputTri += " ";
				break;
			case "h":
				outputOnerio += "ح";
				outputTri += "ح";
				break;
			case "m":
				outputOnerio += "م";
				outputTri += "م";
				break;
			case "d":
				outputOnerio += "د";
				outputTri += "د";
				break;
			case "*":
				outputOnerio += "خ";
				outputTri += "چ";
				break;
			case "b":
				outputOnerio += "ب";
				outputTri += "ب";
				break;
			case "g":
				outputOnerio += "گ";
				outputTri += "ق";
				break;
			case "n":
				outputOnerio += "ن";
				outputTri += "ن";
				break;
			case "l":
			case "r":
				outputOnerio += "ر";
				outputTri += "ر";
				break;
			case "s":
				outputOnerio += "س";
				outputTri += "س";
				break;
			case "a":
				if (inputText.charAt(i + 1) === "y") {
					outputOnerio += "لي";
					outputTri += "يٰ";
					i++;
				} else if (inputText.charAt(i + 1) === "w") {
					outputOnerio += "لو";
					outputTri += "وٰ";
					i++;
				} else {
					outputOnerio += "ا";
					outputTri += "ا";
				}
				break;
			case "u":
			case "w":
				outputOnerio += "و";
				outputTri += "و";
				break;
			case "y":
			case "i":
				outputOnerio += "ي";
				outputTri += "ي";
				break;
			case "o":
				outputOnerio += "او";
				outputTri += "وٰ";
				break;
			case "e":
				outputOnerio += "اي";
				outputTri += "يٰ";
				break;
			case "<":
				for (var num = 0; num < 200; num++) {
					i++;
					if (inputText.charAt(i) === ">") {
						i++;
						continue;
					}
				}
				break;
			default:
				outputOnerio += char;
				outputTri += char;
				break;
			}
		}
		if (outputOnerio == "") {
			AA();
		} else {
			document.getElementById("onerioOutput").value = outputOnerio;
			document.getElementById("triOutput").value = outputTri;
			msg.success('转换成功');
		}
	}

	function copy(id) {
	// 获取输入函数的元素内容
	var inputContent = document.getElementById(id).value;

	// 复制内容到剪贴板
	navigator.clipboard.writeText(inputContent)
	.then(function() {
		msg.success('复制成功');
		console.log("内容已复制到剪贴板");
	})
	.catch(function(err) {
		console.error("无法复制内容：", err);
		msg.failure('复制失败');
	});
}

	function copyContent(id) {
	// 获取输入函数的元素内容
	var inputContent = document.getElementById(id).innerHTML;

	// 复制内容到剪贴板
	navigator.clipboard.writeText(inputContent)
	.then(function() {
		console.log("内容已复制到剪贴板");
		msg.success('复制成功');
	})
	.catch(function(err) {
		console.error("无法复制内容：", err);
		msg.failure('复制失败');
	});
}

function reverseonerioChars() {
	var onerioText = document.getElementById("onerioOutput").value;
	var outputText = "";

	// 将Onerio转换回字母或符号
	for (var i = 0; i < onerioText.length; i++) {
		var char = onerioText.charAt(i);

		switch (char) {
			case "ح":
				outputText += "h";
				break;
			case "م":
				outputText += "m";
				break;
			case "د":
				outputText += "d";
				break;
			case "خ":
				outputText += "*";
				break;
			case "ب":
				outputText += "b";
				break;
			case "گ":
				outputText += "g";
				break;
			case "ن":
				outputText += "n";
				break;
			case "ر":
				outputText += "r";
				break;
			case "س":
				outputText += "s";
				break;
			case "ا":
				if (onerioText.charAt(i + 1) === "و") {
					outputText += "o";
					i++;
				} else if (onerioText.charAt(i + 1) === "ي") {
					outputText += "e";
					i++;
				} else {
					outputText += "a";
				}
				break;
			case "و":
				outputText += "u";
				break;
			case "ي":
				outputText += "i";
				break;
			case "ل":
				if (onerioText.charAt(i + 1) === "و") {
					outputText += "a";
					outputText += "y";
					i++;
				} else if (onerioText.charAt(i + 1) === "ي") {
					outputText += "a";
					outputText += "w";
					i++;
				} else {
					outputText += "[出错]";
				}
				break;
			case "<":
				for (var num = 0; num < 200; num++) {
					i++;
					if (onerioText.charAt(i) === ">") {
						i++;
						continue;
					}
				}
				break;
			default:
				outputText += char;
				break;
		}
	}
	if (outputText == "<br>" || outputText == "") {
		AA();
	} else {
	document.getElementById("inputText").value = outputText;
	msg.success('转换成功')
	}
}

function reversetriChars() {
	var triText = document.getElementById("triOutput").value;
	var outputText = "";

	// 将Tri转换回字母或符号
	for (var i = 0; i < triText.length; i++) {
		var char = triText.charAt(i);

		switch (char) {
			case "وٰ":
				outputText += "o";
				break;
			case "يٰ":
				outputText += "e";
				break;
			case "يٰ":
				outputText += "ay";
				break;
			case "يٰ":
				outputText += "ao";
				break;
			case "ح":
				outputText += "h";
				break;
			case "م":
				outputText += "m";
				break;
			case "د":
				outputText += "d";
				break;
			case "چ":
				outputText += "*";
				break;
			case "ب":
				outputText += "b";
				break;
			case "ق":
				outputText += "g";
				break;
			case "ن":
				outputText += "n";
				break;
			case "ر":
				outputText += "r";
				break;
			case "س":
				outputText += "s";
				break;
			case "ا":
				outputText += "a";
				break;
			case "و":
				outputText += "u";
				break;
			case "ي":
				outputText += "i";
				break;
			case "<":
				for (var num = 0; num < 200; num++) {
					i++;
					if (triText.charAt(i) === ">") {
						i++;
						continue;
					}
				}
				break;
			default:
				outputText += char;
				break;
		}
	}
	if (outputText == "<br>" || outputText == "") {
		AA();
	} else {
	document.getElementById("inputText").value = outputText;
	msg.info('不可抗因素导致本功能有些许异常，请谨慎使用');
	}
}

function clearContent() {document.getElementById("inputText").value = "";document.getElementById("triOutput").value = "";document.getElementById("onerioOutput").value = "";msg.success('已清空')}