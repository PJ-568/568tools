import{degToRad}from"../utils/";export default{top:{renderExpandBtn({node:e,btn:t,expandBtnSize:n,translateX:d,translateY:i,width:o,height:h}){e.parent&&e.parent.isRoot?t.translate(.3*o-n/2-d,-n/2-i):t.translate(.3*o-n/2-d,h+n/2-i)},renderLine({node:e,line:t,top:n,x:d,lineLength:i,height:o,expandBtnSize:h,maxy:a,ctx:l}){e.parent&&e.parent.isRoot?t.plot(`M ${d},${n} L ${d+i},${n-Math.tan(degToRad(l.mindMap.opt.fishboneDeg))*i}`):t.plot(`M ${d},${n+o+h} L ${d},${a}`)},computedLeftTopValue({layerIndex:e,node:t,ctx:n}){if(e>=1&&t.children){let e=t.left+t.width*n.childIndent,d=t.top+t.height+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((t=>{t.left=e,t.top+=d,d+=t.height+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)}))}},adjustLeftTopValueBefore({node:e,parent:t,ctx:n}){let d=e.children.length;if(t&&!t.isRoot&&d>0){let t=e.children.reduce(((e,t)=>e+t.height+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)),0);n.updateBrothersTop(e,t)}},adjustLeftTopValueAfter({parent:e,node:t,ctx:n}){if(e&&e.isRoot){let e=t.expandBtnSize;t.children.forEach((d=>{let i=n.getNodeAreaHeight(d),o=d.top,h=d.left;d.top=t.top-(d.top-t.top)-i+t.height,d.left=t.left+t.width*n.indent+(i+e)/Math.tan(degToRad(n.mindMap.opt.fishboneDeg)),e+=i,n.updateChildrenPro(d.children,{top:d.top-o,left:d.left-h})}))}}},bottom:{renderExpandBtn({node:e,btn:t,expandBtnSize:n,translateX:d,translateY:i,width:o,height:h}){e.parent&&e.parent.isRoot?t.translate(.3*o-n/2-d,h+n/2-i):t.translate(.3*o-n/2-d,-n/2-i)},renderLine({node:e,line:t,top:n,x:d,lineLength:i,height:o,miny:h,ctx:a}){e.parent&&e.parent.isRoot?t.plot(`M ${d},${n+o} L ${d+i},${n+o+Math.tan(degToRad(a.mindMap.opt.fishboneDeg))*i}`):t.plot(`M ${d},${n} L ${d},${h}`)},computedLeftTopValue({layerIndex:e,node:t,ctx:n}){if(1===e&&t.children){let e=t.left+t.width*n.childIndent,d=t.top+t.height+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((t=>{t.left=e,t.top=d+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0),d+=t.height+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)}))}if(e>1&&t.children){let e=t.left+t.width*n.childIndent,d=t.top-(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((t=>{t.left=e,t.top=d-t.height,d-=t.height+(n.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)}))}},adjustLeftTopValueBefore({node:e,ctx:t,layerIndex:n}){let d=e.children.length;if(n>2&&d>0){let n=e.children.reduce(((e,n)=>e+n.height+(t.getNodeActChildrenLength(n)>0?n.expandBtnSize:0)),0);t.updateBrothersTop(e,-n)}},adjustLeftTopValueAfter({parent:e,node:t,ctx:n}){if(e&&e.isRoot){let e=0,d=t.expandBtnSize;t.children.forEach((i=>{let o=n.getNodeActChildrenLength(i)>0,h=n.getNodeAreaHeight(i),a=o>0?h-i.height-(o?i.expandBtnSize:0):0,l=e+a,r=i.left;i.top+=l,i.left=t.left+t.width*n.indent+(h+d)/Math.tan(degToRad(n.mindMap.opt.fishboneDeg)),e+=a,d+=h,n.updateChildrenPro(i.children,{top:l,left:i.left-r})}))}}}};