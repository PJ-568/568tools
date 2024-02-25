import Base from"./Base";import{walk,asyncRun}from"../utils";import{CONSTANTS}from"../utils/constant";const degToRad=t=>Math.PI/180*t;class Fishbone extends Base{constructor(t={}){super(t)}doLayout(t){asyncRun([()=>{this.computedBaseValue()},()=>{this.computedLeftTopValue()},()=>{this.adjustLeftTopValue()},()=>{t(this.root)}])}computedBaseValue(){walk(this.renderer.renderTree,null,((t,e,i,h,n)=>{let o=this.createNode(t,e,i,h);if(i?this.setNodeCenter(o):(e._node.dir?o.dir=e._node.dir:o.dir=n%2==0?CONSTANTS.TIMELINE_DIR.TOP:CONSTANTS.TIMELINE_DIR.BOTTOM,e._node.isRoot&&(o.top=e._node.top-o.height)),!t.data.expand)return!0}),null,!0,0)}computedLeftTopValue(){walk(this.root,null,((t,e,i,h,n)=>{if(t.isRoot){let e=t.left+t.width;t.children.forEach((t=>{t.left=e,e+=t.width}))}if(h>=1&&t.children){let e=t.left+.5*t.width,i=t.top+t.height+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((t=>{t.left=e,t.top+=i,i+=t.height+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)}))}}),null,!0)}adjustLeftTopValue(){walk(this.root,null,((t,e,i,h)=>{if(!t.nodeData.data.expand)return;let n=t.children.length;if(e&&!e.isRoot&&n>0){let e=t.children.reduce(((t,e)=>t+e.height+(this.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)),0);this.updateBrothersTop(t,e)}}),((t,e)=>{if(e&&e.isRoot){let e=0;t.children.forEach((i=>{let h=this.getNodeAreaHeight(i),n=i.top;i.top=t.top-(i.top-t.top)-h+t.height;let o=(h+e)/Math.tan(degToRad(this.mindMap.opt.fishboneDeg));i.left+=o,e+=h,this.updateChildrenPro(i.children,{top:i.top-n,left:o})}))}if(t.isRoot){let e=0;t.children.forEach((t=>{t.left+=e,this.updateChildren(t.children,"left",e);let{left:i,right:h}=this.getNodeBoundaries(t,"h");e+=h-i}))}}),!0)}getNodeAreaHeight(t){let e=0,i=t=>{e+=t.height+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0),t.children.length&&t.children.forEach((t=>{i(t)}))};return i(t),e}updateBrothersLeft(t){let e=t.children,i=0;e.forEach((t=>{t.left+=i,t.children&&t.children.length&&this.updateChildren(t.children,"left",i);let{left:e,right:h}=this.getNodeBoundaries(t,"h"),n=h-e-t.width;n>0&&(i+=n)}))}updateBrothersTop(t,e){if(t.parent&&!t.parent.isRoot){let i=t.parent.children,h=i.findIndex((e=>e===t));i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let n=0;i>h&&(n=e),t.top+=n,t.children&&t.children.length&&this.updateChildren(t.children,"top",n)})),this.updateBrothersTop(t.parent,e)}}renderLine(t,e,i){if(t.children.length<=0)return[];let{left:h,top:n,width:o,height:l,expandBtnSize:r}=t,d=t.children.length;if(t.isRoot){let h=t;t.children.forEach(((n,o)=>{let l=h.left+h.width,r=n.left,d=t.top+t.height/2,a=`M ${l},${d} L ${r},${d}`;e[o].plot(a),i&&i(e[o],n),h=n}))}else{let h=-1/0,o=1/0,a=-1/0,s=t.left+.3*t.width;if(t.children.forEach(((n,l)=>{n.left>a&&(a=n.left);let r=n.top+n.height/2;if(r>h&&(h=r),r<o&&(o=r),t.layerIndex>1){let t=`M ${s},${r} L ${n.left},${r}`;e[l].plot(t),i&&i(e[l],n)}})),d>0){let e=this.draw.path();r=d>0?r:0;let o=a-t.left-.3*t.width;t.parent&&t.parent.isRoot&&t.dir===CONSTANTS.TIMELINE_DIR.TOP||t.parent&&t.parent.isRoot?e.plot(`M ${s},${n} L ${s+o},${n-Math.tan(degToRad(this.mindMap.opt.fishboneDeg))*o}`):e.plot(`M ${s},${n+l+r} L ${s},${h}`),t.style.line(e),t._lines.push(e),i&&i(e,t)}}}renderExpandBtn(t,e){let{width:i,height:h,expandBtnSize:n,isRoot:o}=t;if(!o){let{translateX:o,translateY:l}=e.transform();t.parent&&t.parent.isRoot?e.translate(.3*i-n/2-o,-n/2-l):e.translate(.3*i-n/2-o,h+n/2-l)}}renderGeneralization(t,e,i){let{top:h,bottom:n,right:o,generalizationLineMargin:l,generalizationNodeMargin:r}=this.getNodeBoundaries(t,"h"),d=o+l,a=`M ${d},${h} Q ${d+20},${h+(n-h)/2} ${o+l},${n}`;e.plot(a),i.left=o+r,i.top=h+(n-h-i.height)/2}}export default Fishbone;