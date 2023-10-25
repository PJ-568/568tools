import Node from"../core/render/node/Node";import{CONSTANTS,initRootNodePositionMap}from"../constants/constant";import Lru from"../utils/Lru";class Base{constructor(e){this.renderer=e,this.mindMap=e.mindMap,this.draw=this.mindMap.draw,this.root=null,this.lru=new Lru(this.mindMap.opt.maxNodeCacheCount)}doLayout(){throw new Error("【computed】方法为必要方法，需要子类进行重写！")}renderLine(){throw new Error("【renderLine】方法为必要方法，需要子类进行重写！")}renderExpandBtn(){throw new Error("【renderExpandBtn】方法为必要方法，需要子类进行重写！")}renderGeneralization(){}cacheNode(e,t){this.renderer.nodeCache[e]=t,this.lru.add(e,t)}checkIsNeedResizeSources(){return[CONSTANTS.CHANGE_THEME,CONSTANTS.TRANSFORM_TO_NORMAL_NODE].includes(this.renderer.renderSource)}createNode(e,t,i,r){let n=null;if(e&&e._node&&!this.renderer.reRender)n=e._node,n.reset(),n.layerIndex=r,this.cacheNode(e._node.uid,n),this.checkIsNeedResizeSources()&&(n.getSize(),n.needLayout=!0);else if(this.lru.has(e.data.uid)&&!this.renderer.reRender){n=this.lru.get(e.data.uid);let t=JSON.stringify(n.nodeData.data);n.reset(),n.nodeData=n.handleData(e||{}),n.layerIndex=r,this.cacheNode(e.data.uid,n),e._node=n;let i=this.checkIsNeedResizeSources(),o=t!==JSON.stringify(e.data);(i||o)&&(n.getSize(),n.needLayout=!0)}else{let t=this.mindMap.uid++;n=new Node({data:e,uid:t,renderer:this.renderer,mindMap:this.mindMap,draw:this.draw,layerIndex:r}),e.data.uid=t,this.cacheNode(t,n),e._node=n,e.data.isActive&&this.renderer.addActiveNode(n)}return i?(n.isRoot=!0,this.root=n):(n.parent=t._node,t._node.addChildren(n)),n}formatPosition(e,t,i){return"number"==typeof e?e:void 0!==initRootNodePositionMap[e]?t*initRootNodePositionMap[e]:/^\d\d*%$/.test(e)?Number.parseFloat(e)/100*t:(t-i)/2}setNodeCenter(e){let{initRootNodePosition:t}=this.mindMap.opt,{CENTER:i}=CONSTANTS.INIT_ROOT_NODE_POSITION;(!t||!Array.isArray(t)||t.length<2)&&(t=[i,i]),e.left=this.formatPosition(t[0],this.mindMap.width,e.width),e.top=this.formatPosition(t[1],this.mindMap.height,e.height)}updateChildren(e,t,i){e.forEach((e=>{e[t]+=i,e.children&&e.children.length&&!e.hasCustomPosition()&&this.updateChildren(e.children,t,i)}))}updateChildrenPro(e,t){e.forEach((e=>{Object.keys(t).forEach((i=>{e[i]+=t[i]})),e.children&&e.children.length&&!e.hasCustomPosition()&&this.updateChildrenPro(e.children,t)}))}getNodeAreaWidth(e){let t=[],i=(e,r)=>{e.children.length?(r+=e.width/2,e.children.forEach((e=>{i(e,r)}))):(r+=e.width,t.push(r))};return i(e,0),Math.max(...t)}quadraticCurvePath(e,t,i,r){return`M ${e},${t} Q ${e+.2*(i-e)},${t+.8*(r-t)} ${i},${r}`}cubicBezierPath(e,t,i,r){let n=e+(i-e)/2;return`M ${e},${t} C ${n},${t} ${n},${r} ${i},${r}`}getMarginX(e){return 1===e?this.mindMap.themeConfig.second.marginX:this.mindMap.themeConfig.node.marginX}getMarginY(e){return 1===e?this.mindMap.themeConfig.second.marginY:this.mindMap.themeConfig.node.marginY}getNodeWidthWithGeneralization(e){return Math.max(e.width,e.checkHasGeneralization()?e._generalizationNodeWidth:0)}getNodeHeightWithGeneralization(e){return Math.max(e.height,e.checkHasGeneralization()?e._generalizationNodeHeight:0)}getNodeBoundaries(e,t){let{generalizationLineMargin:i,generalizationNodeMargin:r}=this.mindMap.themeConfig,n=e=>{let i=1/0,o=-1/0,a=1/0,d=-1/0;e.children&&e.children.length>0&&e.children.forEach((e=>{let{left:h,right:s,top:l,bottom:c}=n(e),g=e.checkHasGeneralization()&&e.nodeData.data.expand?e._generalizationNodeWidth+r:0,u=e.checkHasGeneralization()&&e.nodeData.data.expand?e._generalizationNodeHeight+r:0;h-("h"===t?g:0)<i&&(i=h-("h"===t?g:0)),s+("h"===t?g:0)>o&&(o=s+("h"===t?g:0)),l<a&&(a=l),c+("v"===t?u:0)>d&&(d=c+("v"===t?u:0))}));let h={left:e.left,right:e.left+e.width,top:e.top,bottom:e.top+e.height};return{left:h.left<i?h.left:i,right:h.right>o?h.right:o,top:h.top<a?h.top:a,bottom:h.bottom>d?h.bottom:d}},{left:o,right:a,top:d,bottom:h}=n(e);return{left:o,right:a,top:d,bottom:h,generalizationLineMargin:i,generalizationNodeMargin:r}}getNodeActChildrenLength(e){return e.nodeData.children&&e.nodeData.children.length}}export default Base;