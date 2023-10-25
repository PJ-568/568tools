"use strict";window.search=window.search||{},function(e){if(Mark&&elasticlunr){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return this.substr(!t||t<0?0:+t,e.length)===e});var t,r,a=document.getElementById("search-wrapper"),s=document.getElementById("searchbar"),n=(document.getElementById("searchbar-outer"),document.getElementById("searchresults")),o=document.getElementById("searchresults-outer"),i=document.getElementById("searchresults-header"),c=document.getElementById("search-toggle"),l=document.getElementById("content"),u=null,d=[],h={teaser_word_count:30,limit_results:30},p={bool:"AND",expand:!0,fields:{title:{boost:1},body:{boost:1},breadcrumbs:{boost:0}}},f=[],m=new Mark(l),v="",g="search",y="highlight",_=0,w=83,b=27,L=40,E=38,C=13,k=(t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},r=function(e){return t[e]},function(e){return e.replace(/[&<>'"]/g,r)});fetch(path_to_root+"searchindex.json").then((e=>e.json())).then((e=>T(e))).catch((e=>{var t=document.createElement("script");t.src=path_to_root+"searchindex.js",t.onload=()=>T(window.search),document.head.appendChild(t)})),e.hasFocus=x}function x(){return s===document.activeElement}function I(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function S(e){var t=document.createElement("a");return t.href=e,{source:e,protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,params:function(){for(var e,r={},a=t.search.replace(/^\?/,"").split("&"),s=a.length,n=0;n<s;n++)a[n]&&(r[(e=a[n].split("="))[0]]=e[1]);return r}(),file:(t.pathname.match(/\/([^/?#]+)$/i)||[,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^/])/,"/$1")}}function B(e){var t=e.protocol+"://"+e.host;""!=e.port&&(t+=":"+e.port),t+=e.path;var r="?";for(var a in e.params)e.params.hasOwnProperty(a)&&(t+=r+a+"="+e.params[a],r="&");return""!=e.hash&&(t+="#"+e.hash),t}function D(e,t){var r=function(e,t){var r=t.map((function(e){return elasticlunr.stemmer(e.toLowerCase())})),a=40,s=[],n=e.toLowerCase().split(". "),o=0,i=0,c=!1;for(var l in n){var u=n[l].split(" ");for(var d in i=8,u){if((b=u[d]).length>0){for(var p in r)elasticlunr.stemmer(b).startsWith(r[p])&&(i=a,c=!0);s.push([b,i,o]),i=2}o+=b.length,o+=1}o+=1}if(0==s.length)return e;var f=[],m=Math.min(s.length,h.teaser_word_count),v=0;for(d=0;d<m;d++)v+=s[d][1];f.push(v);for(d=0;d<s.length-m;d++)v-=s[d][1],v+=s[d+m][1],f.push(v);if(c)for(var g=0,y=0,_=f.length-1;_>=0;_--)f[_]>g&&(g=f[_],y=_);else y=0;var w=[];for(o=s[y][2],_=y;_<y+m;_++){var b;o<(b=s[_])[2]&&(w.push(e.substring(o,b[2])),o=b[2]),b[1]==a&&w.push("<em>"),o=b[2]+b[0].length,w.push(e.substring(b[2],o)),b[1]==a&&w.push("</em>")}return w.join("")}(k(e.doc.body),t);_++;var a=d[e.ref].split("#");1==a.length&&a.push("");t=encodeURIComponent(t.join(" ")).replace(/\'/g,"%27");return'<a href="'+path_to_root+a[0]+"?"+y+"="+t+"#"+a[1]+'" aria-details="teaser_'+_+'">'+e.doc.breadcrumbs+'</a><span class="teaser" id="teaser_'+_+'" aria-label="Search Result Teaser">'+r+"</span>"}function T(e){h=e.results_options,p=e.search_options,e.searchbar_outer,d=e.doc_urls,u=elasticlunr.Index.load(e.index),c.addEventListener("click",(function(e){a.classList.contains("hidden")?(M(!0),window.scrollTo(0,0),s.select()):M(!1)}),!1),s.addEventListener("keyup",(function(e){O()}),!1),document.addEventListener("keydown",(function(e){!function(e){if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"textarea"===e.target.type||"text"===e.target.type)return;if(e.keyCode===b)e.preventDefault(),s.classList.remove("active"),P("",""!==s.value.trim()?"push":"replace"),x()&&j(),M(!1),m.unmark();else if(x()||e.keyCode!==w){if(x()&&e.keyCode===L)e.preventDefault(),j(),n.firstElementChild.classList.add("focus");else if(!x()&&(e.keyCode===L||e.keyCode===E||e.keyCode===C)){var t=n.querySelector("li.focus");if(!t)return;if(e.preventDefault(),e.keyCode===L){var r=t.nextElementSibling;r&&(t.classList.remove("focus"),r.classList.add("focus"))}else if(e.keyCode===E){t.classList.remove("focus");var a=t.previousElementSibling;a?a.classList.add("focus"):s.select()}else window.location.assign(t.querySelector("a"))}}else e.preventDefault(),M(!0),window.scrollTo(0,0),s.select()}(e)}),!1),window.onpopstate=function(e){A()},document.addEventListener("submit",(function(e){e.preventDefault()}),!1),A()}function j(){var e=document.createElement("input");e.setAttribute("style","position: absolute; opacity: 0;"),c.appendChild(e),e.focus(),e.remove()}function A(){var e=S(window.location.href);if(e.params.hasOwnProperty(g)&&""!=e.params[g]?(M(!0),s.value=decodeURIComponent((e.params[g]+"").replace(/\+/g,"%20")),O()):M(!1),e.params.hasOwnProperty(y)){var t=decodeURIComponent(e.params[y]).split(" ");m.mark(t,{exclude:f});var r=document.querySelectorAll("mark");function n(){for(var e=0;e<r.length;e++)r[e].classList.add("fade-out"),window.setTimeout((function(e){m.unmark()}),300)}for(var a=0;a<r.length;a++)r[a].addEventListener("click",n)}}function M(e){if(e)a.classList.remove("hidden"),c.setAttribute("aria-expanded","true");else{a.classList.add("hidden"),c.setAttribute("aria-expanded","false");for(var t=n.children,r=0;r<t.length;r++)t[r].classList.remove("focus")}}function K(e){e?o.classList.remove("hidden"):o.classList.add("hidden")}function O(){var e=s.value.trim();""!=e?(s.classList.add("active"),function(e){if(v==e)return;v=e;if(null==u)return;var t=u.search(e,p),r=Math.min(t.length,h.limit_results);i.innerText=function(e,t){return 1==e?e+" search result for '"+t+"':":0==e?"No search results for '"+t+"'.":e+" search results for '"+t+"':"}(r,e);var a=e.split(" ");I(n);for(var s=0;s<r;s++){var o=document.createElement("li");o.innerHTML=D(t[s],a),n.appendChild(o)}K(!0)}(e)):(s.classList.remove("active"),K(!1),I(n)),P(e,"push_if_new_search_else_replace"),m.unmark()}function P(e,t){var r=S(window.location.href),a=!r.params.hasOwnProperty(g);""!=e||"push_if_new_search_else_replace"==t?(r.params[g]=e,delete r.params[y],r.hash=""):(delete r.params[y],delete r.params[g]),"push"==t||"push_if_new_search_else_replace"==t&&a?history.pushState({},document.title,B(r)):("replace"==t||"push_if_new_search_else_replace"==t&&!a)&&history.replaceState({},document.title,B(r))}}(window.search);