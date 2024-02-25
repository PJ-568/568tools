let allOkFiles=[],alltType=["jpg","jpeg","png","gif","webp","svg","ico","bmp","vnd.microsoft.icon"],outType=["jpeg","png","webp","ico"],config={},input=document.getElementById("files");async function readFiles(e){let t=[...e];0!==t.length&&(document.getElementById("loading").style.display="block",setConfig(),allOkFiles=[],t.map((async(e,n)=>{let i=await file2Base64(e),l=await getImagesWidthHeight(i),o=()=>{let t=alltType.filter((t=>e.name.endsWith(t)));return{name:e.name.replace(t[0],""),type:t[0]}},a=await base642file(i,config.type,config.size,config.quality);if(allOkFiles.push({name:o().name,type:o().type,base64:i,size:e.size,width:l.w,height:l.h,data:a}),t.length===allOkFiles.length){if(console.log(allOkFiles),config.isZip)allOkFiles.map((e=>{funDownload(e.data,`${e.name}.${config.type}`)})),document.getElementById("loading").style.display="none",document.getElementById("pyro").innerHTML='\n                    <div class="before"></div>\n                    <div class="after"></div>\n                    ';else{let e=new JSZip,t=(new Date).getTime(),n=e.folder(t);allOkFiles.map((e=>{n.file(`${e.name}.${config.type}`,e.data,{base64:!1})})),e.generateAsync({type:"blob"}).then((function(e){funDownload(e,`${t}.zip`),document.getElementById("loading").style.display="none",document.getElementById("pyro").innerHTML='\n                            <div class="before"></div>\n                            <div class="after"></div>\n                            '}))}let e=document.getElementById("img_box"),t="";allOkFiles.map((e=>{t+=`<div class="img_one">\n                        <p class="type ${e.type}">${e.type}</p>\n                        <p class="size">${e.width}x${e.height}</p>\n                        <img src="${e.base64}" alt="">\n                    </div>`})),e.innerHTML=t}})))}function setConfig(){config.type=document.querySelector("#select_type").value,config.size=document.querySelector("#select_size").value-0,config.quality=document.querySelector("#select_quality").value-0,config.isZip=document.querySelector("#select_isZip").checked,console.log(config)}function file2Base64(e){return new Promise(((t,n)=>{let i=new FileReader;i.readAsDataURL(e),i.onload=function(e){console.log(e),t(this.result)}}))}function getImagesWidthHeight(e){return new Promise(((t,n)=>{let i=new Image;i.src=e,i.onload=function(){t({w:this.width,h:this.height})}}))}function base642file(e,t="jpeg",n=1,i=.92){return new Promise(((l,o)=>{let a=new Image;a.src=e,a.onload=function(){let e=document.getElementById("can"),o=this.width*n,a=this.height*n;e.setAttribute("width",o),e.setAttribute("height",a),e.getContext("2d").drawImage(this,0,0,o,a),e.toBlob((function(e){l(e)}),`image/${t}`,i)}}))}function funDownload(e,t="未命名"){let n=document.createElement("a");n.download=t,n.style.display="none";new Blob([e]);n.href=URL.createObjectURL(e),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function dropzone(){let e=document.getElementById("body");e.ondragover=function(t){let n=setTimeout((()=>{e.className=""}),3e3);return"ondragover"!==e.className?e.className="ondragover":clearTimeout(n),!1},e.ondragend=function(t){return e.className="",console.log("ondragend"),!1},e.ondrop=function(t){t.preventDefault(),e.className="";let n=[...t.dataTransfer.files];n=n.filter((e=>alltType.includes(e.type.split("/")[1]))),readFiles(n)}}input.addEventListener("change",(function(){readFiles([...this.files])}),!1),dropzone();