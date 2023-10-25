import{getAssociativeLineTargetIndex,joinCubicBezierPath,computeNodePoints,getDefaultControlPointOffsets}from"./associativeLineUtils";function createControlNodes(){let{associativeLineActiveColor:o}=this.mindMap.themeConfig;this.controlLine1=this.draw.line().stroke({color:o,width:2}),this.controlLine2=this.draw.line().stroke({color:o,width:2}),this.controlPoint1=this.createOneControlNode("controlPoint1"),this.controlPoint2=this.createOneControlNode("controlPoint2")}function createOneControlNode(o){let{associativeLineActiveColor:t}=this.mindMap.themeConfig;return this.draw.circle(this.controlPointDiameter).stroke({color:t}).fill({color:"#fff"}).click((o=>{o.stopPropagation()})).mousedown((t=>{this.onControlPointMousedown(t,o)}))}function onControlPointMousedown(o,t){o.stopPropagation(),this.isControlPointMousedown=!0,this.mousedownControlPointKey=t}function onControlPointMousemove(o){if(!this.isControlPointMousedown||!this.mousedownControlPointKey||!this[this.mousedownControlPointKey])return;o.stopPropagation(),o.preventDefault();let t=this.controlPointDiameter/2,{x:n,y:e}=this.getTransformedEventPos(o);this.controlPointMousemoveState.pos={x:n,y:e},this[this.mousedownControlPointKey].x(n-t).y(e-t);let[i,s,r,l,c]=this.activeLine,[h,a]=computeNodePoints(l,c);this.controlPointMousemoveState.startPoint=h,this.controlPointMousemoveState.endPoint=a;let P=getAssociativeLineTargetIndex(l,c);this.controlPointMousemoveState.targetIndex=P;let u=[],d=l.nodeData.data.associativeLineTargetControlOffsets;u=d?d[P]:getDefaultControlPointOffsets(h,a);let C=null,f=null;"controlPoint1"===this.mousedownControlPointKey?(C={x:n,y:e},f={x:a.x+u[1].x,y:a.y+u[1].y},this.controlLine1.plot(h.x,h.y,C.x,C.y)):(C={x:h.x+u[0].x,y:h.y+u[0].y},f={x:n,y:e},this.controlLine2.plot(a.x,a.y,f.x,f.y));let x=joinCubicBezierPath(h,a,C,f);i.plot(x),s.plot(x),this.updateTextPos(i,r),this.updateTextEditBoxPos(r)}function onControlPointMouseup(o){if(!this.isControlPointMousedown)return;o.stopPropagation(),o.preventDefault();let{pos:t,startPoint:n,endPoint:e,targetIndex:i}=this.controlPointMousemoveState,[,,,s]=this.activeLine,r=[],l=s.nodeData.data.associativeLineTargetControlOffsets;l?r=l:r[i]=getDefaultControlPointOffsets(n,e);let c=null,h=null;"controlPoint1"===this.mousedownControlPointKey?(c={x:t.x-n.x,y:t.y-n.y},h=r[i][1]):(c=r[i][0],h={x:t.x-e.x,y:t.y-e.y}),r[i]=[c,h],this.mindMap.execCommand("SET_NODE_DATA",s,{associativeLineTargetControlOffsets:r}),setTimeout((()=>{this.resetControlPoint()}),0)}function resetControlPoint(){this.isControlPointMousedown=!1,this.mousedownControlPointKey="",this.controlPointMousemoveState={pos:null,startPoint:null,endPoint:null,targetIndex:""}}function renderControls(o,t,n,e){this.controlLine1||this.createControlNodes();let i=this.controlPointDiameter/2;this.controlLine1.plot(o.x,o.y,n.x,n.y),this.controlLine2.plot(t.x,t.y,e.x,e.y),this.controlPoint1.x(n.x-i).y(n.y-i),this.controlPoint2.x(e.x-i).y(e.y-i)}function removeControls(){this.controlLine1&&([this.controlLine1,this.controlLine2,this.controlPoint1,this.controlPoint2].forEach((o=>{o.remove()})),this.controlLine1=null,this.controlLine2=null,this.controlPoint1=null,this.controlPoint2=null)}function hideControls(){this.controlLine1&&[this.controlLine1,this.controlLine2,this.controlPoint1,this.controlPoint2].forEach((o=>{o.hide()}))}function showControls(){this.controlLine1&&[this.controlLine1,this.controlLine2,this.controlPoint1,this.controlPoint2].forEach((o=>{o.show()}))}export default{createControlNodes:createControlNodes,createOneControlNode:createOneControlNode,onControlPointMousedown:onControlPointMousedown,onControlPointMousemove:onControlPointMousemove,onControlPointMouseup:onControlPointMouseup,resetControlPoint:resetControlPoint,renderControls:renderControls,removeControls:removeControls,hideControls:hideControls,showControls:showControls};