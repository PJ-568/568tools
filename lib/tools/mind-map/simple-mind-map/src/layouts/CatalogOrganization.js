import Base from"./Base";import{walk,asyncRun}from"../utils";class CatalogOrganization extends Base{constructor(t={}){super(t)}doLayout(t){asyncRun([()=>{this.computedBaseValue()},()=>{this.computedLeftTopValue()},()=>{this.adjustLeftTopValue()},()=>{t(this.root)}])}computedBaseValue(){walk(this.renderer.renderTree,null,((t,e,i,h)=>{let n=this.createNode(t,e,i,h);if(i?this.setNodeCenter(n):e._node.isRoot&&(n.top=e._node.top+e._node.height+this.getMarginX(h)),!t.data.expand)return!0}),((t,e,i,h)=>{if(i){let e=!1===t.data.expand?0:t._node.children.length;t._node.childrenAreaWidth=e?t._node.children.reduce(((t,e)=>t+e.width),0)+(e+1)*this.getMarginX(h+1):0}}),!0,0)}computedLeftTopValue(){walk(this.root,null,((t,e,i,h)=>{if(t.nodeData.data.expand&&t.children&&t.children.length){let e=this.getMarginX(h+1),n=this.getMarginY(h+1);if(i){let i=t.left+t.width/2-t.childrenAreaWidth/2+e;t.children.forEach((t=>{t.left=i,i+=t.width+e}))}else{let e=t.top+t.height+n+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((i=>{i.left=t.left+.5*t.width,i.top=e,e+=i.height+n+(this.getNodeActChildrenLength(i)>0?i.expandBtnSize:0)}))}}}),null,!0)}adjustLeftTopValue(){walk(this.root,null,((t,e,i,h)=>{if(!t.nodeData.data.expand)return;if(e&&e.isRoot){let e=this.getNodeAreaWidth(t)-t.width;e>0&&this.updateBrothersLeft(t,e)}let n=t.children.length;if(e&&!e.isRoot&&n>0){let e=this.getMarginY(h+1),i=t.children.reduce(((t,e)=>t+e.height+(this.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)),0)+n*e;this.updateBrothersTop(t,i)}}),((t,e,i)=>{if(i){let{right:e,left:i}=this.getNodeBoundaries(t,"h"),h=e-i,n=t.left-i-(h-t.width)/2;this.updateChildren(t.children,"left",n)}}),!0)}updateBrothersLeft(t,e){if(t.parent){let i=t.parent.children,h=i.findIndex((e=>e===t));i.forEach(((t,i)=>{t.hasCustomPosition()||i<=h||(t.left+=e,t.children&&t.children.length&&this.updateChildren(t.children,"left",e))})),this.updateBrothersLeft(t.parent,e)}}updateBrothersTop(t,e){if(t.parent&&!t.parent.isRoot){let i=t.parent.children,h=i.findIndex((e=>e===t));i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let n=0;i>h&&(n=e),t.top+=n,t.children&&t.children.length&&this.updateChildren(t.children,"top",n)})),this.updateBrothersTop(t.parent,e)}}renderLine(t,e,i){if(t.children.length<=0)return[];let{left:h,top:n,width:l,height:d,expandBtnSize:a}=t;this.mindMap.opt.alwaysShowExpandBtn||(a=0);let r=t.children.length,o=this.getMarginX(t.layerIndex+1);if(t.isRoot){let a=h+l/2,s=n+d,p=.7*o,f=1/0,g=-1/0;t.children.forEach(((t,h)=>{let n=t.left+t.width/2,l=t.top;n<f&&(f=n),n>g&&(g=n);let d=this.mindMap.themeConfig.nodeUseLineStyle?` L ${t.left},${l} L ${t.left+t.width},${l}`:"",a=`M ${n},${s+p} L ${n},${s+p>l?l+t.height:l}`+d;e[h].plot(a),i&&i(e[h],t)})),f=Math.min(f,a),g=Math.max(g,a);let u=this.draw.path();if(t.style.line(u),u.plot(`M ${a},${s} L ${a},${s+p}`),t._lines.push(u),i&&i(u,t),r>0){let e=this.draw.path();t.style.line(e),e.plot(`M ${f},${s+p} L ${g},${s+p}`),t._lines.push(e),i&&i(e,t)}}else{let h=n+d,l=-1/0,o=t.left+.3*t.width;if(t.children.forEach(((d,a)=>{let r=d.top+d.height/2;r>l&&(l=r);let s="",p=d.left,f=d.left+d.width<o,g=!1;f?p=d.left+d.width:d.left<o&&d.left+d.width>o&&(g=!0,r=d.top,l=r),r>n&&r<h?s=`M ${f?t.left:t.left+t.width},${r} L ${p},${r}`:r<h?(g&&(r=d.top+d.height,p=o),s=`M ${o},${n} L ${o},${r} L ${p},${r}`):(g&&(p=o),s=`M ${o},${r} L ${p},${r}`),s+=this.mindMap.themeConfig.nodeUseLineStyle?` L ${p},${r-d.height/2} L ${p},${r+d.height/2}`:"",e[a].plot(s),i&&i(e[a],d)})),r>0){let e=this.draw.path();a=r>0?a:0,t.style.line(e),l<h+a?e.hide():(e.plot(`M ${o},${h+a} L ${o},${l}`),e.show()),t._lines.push(e),i&&i(e,t)}}}renderExpandBtn(t,e){let{width:i,height:h,expandBtnSize:n,isRoot:l}=t;if(!l){let{translateX:t,translateY:l}=e.transform();e.translate(.3*i-n/2-t,h+n/2-l)}}renderGeneralization(t,e,i){let{top:h,bottom:n,right:l,generalizationLineMargin:d,generalizationNodeMargin:a}=this.getNodeBoundaries(t,"h"),r=l+d,o=`M ${r},${h} Q ${r+20},${h+(n-h)/2} ${l+d},${n}`;e.plot(o),i.left=l+a,i.top=h+(n-h-i.height)/2}}export default CatalogOrganization;