import{bfsWalk}from"../utils";import{CONSTANTS}from"../constants/constant";class KeyboardNavigation{constructor(t){this.opt=t,this.mindMap=t.mindMap,this.onKeyup=this.onKeyup.bind(this),this.mindMap.keyCommand.addShortcut(CONSTANTS.KEY_DIR.LEFT,(()=>{this.onKeyup(CONSTANTS.KEY_DIR.LEFT)})),this.mindMap.keyCommand.addShortcut(CONSTANTS.KEY_DIR.UP,(()=>{this.onKeyup(CONSTANTS.KEY_DIR.UP)})),this.mindMap.keyCommand.addShortcut(CONSTANTS.KEY_DIR.RIGHT,(()=>{this.onKeyup(CONSTANTS.KEY_DIR.RIGHT)})),this.mindMap.keyCommand.addShortcut(CONSTANTS.KEY_DIR.DOWN,(()=>{this.onKeyup(CONSTANTS.KEY_DIR.DOWN)}))}onKeyup(t){if(this.mindMap.renderer.activeNodeList.length>0)this.focus(t);else{let t=this.mindMap.renderer.root;this.mindMap.renderer.moveNodeToCenter(t),t.active()}}focus(t){let e=this.mindMap.renderer.activeNodeList[0],o=this.getNodeRect(e),i=null,r=1/0,N=(t,e)=>{let N=this.getDistance(o,t);N<r&&(i=e,r=N)};this.getFocusNodeByShadowAlgorithm({currentActiveNode:e,currentActiveNodeRect:o,dir:t,checkNodeDis:N}),i||this.getFocusNodeByAreaAlgorithm({currentActiveNode:e,currentActiveNodeRect:o,dir:t,checkNodeDis:N}),i||this.getFocusNodeBySimpleAlgorithm({currentActiveNode:e,currentActiveNodeRect:o,dir:t,checkNodeDis:N}),i&&(this.mindMap.renderer.moveNodeToCenter(i),i.active())}getFocusNodeBySimpleAlgorithm({currentActiveNode:t,currentActiveNodeRect:e,dir:o,checkNodeDis:i}){bfsWalk(this.mindMap.renderer.root,(r=>{if(r===t)return;let N=this.getNodeRect(r),{left:d,top:n,right:c,bottom:s}=N,h=!1;o===CONSTANTS.KEY_DIR.LEFT?h=c<=e.left:o===CONSTANTS.KEY_DIR.RIGHT?h=d>=e.right:o===CONSTANTS.KEY_DIR.UP?h=s<=e.top:o===CONSTANTS.KEY_DIR.DOWN&&(h=n>=e.bottom),h&&i(N,r)}))}getFocusNodeByShadowAlgorithm({currentActiveNode:t,currentActiveNodeRect:e,dir:o,checkNodeDis:i}){bfsWalk(this.mindMap.renderer.root,(r=>{if(r===t)return;let N=this.getNodeRect(r),{left:d,top:n,right:c,bottom:s}=N,h=!1;o===CONSTANTS.KEY_DIR.LEFT?h=d<e.left&&n<e.bottom&&s>e.top:o===CONSTANTS.KEY_DIR.RIGHT?h=c>e.right&&n<e.bottom&&s>e.top:o===CONSTANTS.KEY_DIR.UP?h=n<e.top&&d<e.right&&c>e.left:o===CONSTANTS.KEY_DIR.DOWN&&(h=s>e.bottom&&d<e.right&&c>e.left),h&&i(N,r)}))}getFocusNodeByAreaAlgorithm({currentActiveNode:t,currentActiveNodeRect:e,dir:o,checkNodeDis:i}){let r=(e.right+e.left)/2,N=(e.bottom+e.top)/2;bfsWalk(this.mindMap.renderer.root,(e=>{if(e===t)return;let d=this.getNodeRect(e),{left:n,top:c,right:s,bottom:h}=d,a=(s+n)/2-r,T=(h+c)/2-N;if(0===a&&0===T)return;let S=!1;o===CONSTANTS.KEY_DIR.LEFT?S=a<=0&&a<=T&&a<=-T:o===CONSTANTS.KEY_DIR.RIGHT?S=a>0&&a>=-T&&a>=T:o===CONSTANTS.KEY_DIR.UP?S=T<=0&&T<a&&T<-a:o===CONSTANTS.KEY_DIR.DOWN&&(S=T>0&&-T<a&&T>a),S&&i(d,e)}))}getNodeRect(t){let{scaleX:e,scaleY:o,translateX:i,translateY:r}=this.mindMap.draw.transform(),{left:N,top:d,width:n,height:c}=t;return{right:(N+n)*e+i,bottom:(d+c)*o+r,left:N*e+i,top:d*o+r}}getDistance(t,e){let o=this.getCenter(t),i=this.getCenter(e);return Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2))}getCenter({left:t,right:e,top:o,bottom:i}){return{x:(t+e)/2,y:(o+i)/2}}}KeyboardNavigation.instanceName="keyboardNavigation";export default KeyboardNavigation;