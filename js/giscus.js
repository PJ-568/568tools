// 获取用户使用的语种。
var lang = translate.language.getCurrent();
var giscus_lang = "zh-CN";
switch (lang) {
	case "chinese_traditional":
		giscus_lang = "zh-TW";
		break;
	case "english":
		giscus_lang = "en";
		break;
	case "spanish":
		giscus_lang = "es";
		break;
	case "japanese":
		giscus_lang = "ja";
		break;
	case "korean":
		giscus_lang = "ko";
		break;
	case "french":
		giscus_lang = "fr";
		break;
	case "arabic":
		giscus_lang = "ar";
		break;
	default:
		giscus_lang = "zh-CN";
		break;
}

var giscus = function () {
	if (document.getElementById("giscus-container") != null) {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://giscus.app/client.js";


		script.setAttribute("data-repo", "PJ-568/568tools");
		script.setAttribute("data-repo-id", "R_kgDOJer3gw");
		script.setAttribute("data-category", "Announcements");
		script.setAttribute("data-category-id", "DIC_kwDOJer3g84CXG0D");

		script.setAttribute("data-mapping", "title");
		script.setAttribute("data-strict", "1");
		script.setAttribute("data-reactions-enabled", "1");
		script.setAttribute("data-emit-metadata", "0");
		script.setAttribute("data-input-position", "top");
		script.setAttribute("data-theme", "https://tools.pj568.eu.org/css/568_comment.css");
		script.setAttribute("data-lang", giscus_lang);

		script.crossOrigin = "anonymous";
		script.async = true;

		document.getElementById("giscus-container").appendChild(script);
	}
};

window.addEventListener('load', giscus);