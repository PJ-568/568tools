import{bfsWalk,throttle}from"../utils";class Select{constructor({mindMap:t}){this.mindMap=t,this.rect=null,this.isMousedown=!1,this.mouseDownX=0,this.mouseDownY=0,this.mouseMoveX=0,this.mouseMoveY=0,this.bindEvent()}bindEvent(){this.checkInNodes=throttle(this.checkInNodes,300,this),this.mindMap.on("mousedown",(t=>{if(this.mindMap.opt.readonly)return;let{useLeftKeySelectionRightKeyDrag:e}=this.mindMap.opt;if(!t.ctrlKey&&(e?1!==t.which:3!==t.which))return;t.preventDefault(),this.isMousedown=!0;let{x:i,y:s}=this.mindMap.toPos(t.clientX,t.clientY);this.mouseDownX=i,this.mouseDownY=s,this.createRect(i,s)})),this.mindMap.on("mousemove",(t=>{if(this.mindMap.opt.readonly)return;if(!this.isMousedown)return;let{x:e,y:i}=this.mindMap.toPos(t.clientX,t.clientY);this.mouseMoveX=e,this.mouseMoveY=i,Math.abs(e-this.mouseDownX)<=10&&Math.abs(i-this.mouseDownY)<=10||(clearTimeout(this.autoMoveTimer),this.onMove(e,i))})),this.mindMap.on("mouseup",(()=>{this.mindMap.opt.readonly||this.isMousedown&&(this.mindMap.emit("node_active",null,this.mindMap.renderer.activeNodeList),clearTimeout(this.autoMoveTimer),this.isMousedown=!1,this.rect&&this.rect.remove(),this.rect=null)}))}onMove(t,e){this.rect.plot([[this.mouseDownX,this.mouseDownY],[this.mouseMoveX,this.mouseDownY],[this.mouseMoveX,this.mouseMoveY],[this.mouseDownX,this.mouseMoveY]]),this.checkInNodes();let i=this.mindMap.opt.selectTranslateStep,s=this.mindMap.opt.selectTranslateLimit,o=0;t<=this.mindMap.elRect.left+s&&(this.mouseDownX+=i,this.mindMap.view.translateX(i),o++),t>=this.mindMap.elRect.right-s&&(this.mouseDownX-=i,this.mindMap.view.translateX(-i),o++),e<=this.mindMap.elRect.top+s&&(this.mouseDownY+=i,this.mindMap.view.translateY(i),o++),e>=this.mindMap.elRect.bottom-s&&(this.mouseDownY-=i,this.mindMap.view.translateY(-i),o++),o>0&&this.startAutoMove(t,e)}startAutoMove(t,e){this.autoMoveTimer=setTimeout((()=>{this.onMove(t,e)}),20)}createRect(t,e){this.rect=this.mindMap.svg.polygon().stroke({color:"#0984e3"}).fill({color:"rgba(9,132,227,0.3)"}).plot([[t,e]])}checkInNodes(){let{scaleX:t,scaleY:e,translateX:i,translateY:s}=this.mindMap.draw.transform(),o=Math.min(this.mouseDownX,this.mouseMoveX),n=Math.min(this.mouseDownY,this.mouseMoveY),h=Math.max(this.mouseDownX,this.mouseMoveX),a=Math.max(this.mouseDownY,this.mouseMoveY);bfsWalk(this.mindMap.renderer.root,(m=>{let{left:r,top:d,width:l,height:u}=m,M=(r+l)*t+i,c=(d+u)*e+s;if(r=r*t+i,d=d*e+s,(r>=o&&r<=h||M>=o&&M<=h)&&(d>=n&&d<=a||c>=n&&c<=a)){if(m.nodeData.data.isActive)return;this.mindMap.renderer.setNodeActive(m,!0),this.mindMap.renderer.addActiveNode(m)}else if(m.nodeData.data.isActive){if(!m.nodeData.data.isActive)return;this.mindMap.renderer.setNodeActive(m,!1),this.mindMap.renderer.removeActiveNode(m)}}))}}Select.instanceName="select";export default Select;