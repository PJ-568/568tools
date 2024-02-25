import EventEmitter from"eventemitter3";import{CONSTANTS}from"../../constants/constant";class Event extends EventEmitter{constructor(e={}){super(),this.opt=e,this.mindMap=e.mindMap,this.isLeftMousedown=!1,this.isRightMousedown=!1,this.mousedownPos={x:0,y:0},this.mousemovePos={x:0,y:0},this.mousemoveOffset={x:0,y:0},this.bindFn(),this.bind()}bindFn(){this.onBodyClick=this.onBodyClick.bind(this),this.onDrawClick=this.onDrawClick.bind(this),this.onMousedown=this.onMousedown.bind(this),this.onMousemove=this.onMousemove.bind(this),this.onMouseup=this.onMouseup.bind(this),this.onMousewheel=this.onMousewheel.bind(this),this.onContextmenu=this.onContextmenu.bind(this),this.onSvgMousedown=this.onSvgMousedown.bind(this),this.onKeyup=this.onKeyup.bind(this),this.onMouseenter=this.onMouseenter.bind(this),this.onMouseleave=this.onMouseleave.bind(this)}bind(){document.body.addEventListener("click",this.onBodyClick),this.mindMap.svg.on("click",this.onDrawClick),this.mindMap.el.addEventListener("mousedown",this.onMousedown),this.mindMap.svg.on("mousedown",this.onSvgMousedown),window.addEventListener("mousemove",this.onMousemove),window.addEventListener("mouseup",this.onMouseup),this.mindMap.el.addEventListener("wheel",this.onMousewheel),this.mindMap.svg.on("contextmenu",this.onContextmenu),this.mindMap.svg.on("mouseenter",this.onMouseenter),this.mindMap.svg.on("mouseleave",this.onMouseleave),window.addEventListener("keyup",this.onKeyup)}unbind(){document.body.removeEventListener("click",this.onBodyClick),this.mindMap.svg.off("click",this.onDrawClick),this.mindMap.el.removeEventListener("mousedown",this.onMousedown),window.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("mouseup",this.onMouseup),this.mindMap.el.removeEventListener("wheel",this.onMousewheel),this.mindMap.svg.off("contextmenu",this.onContextmenu),this.mindMap.svg.off("mouseenter",this.onMouseenter),this.mindMap.svg.off("mouseleave",this.onMouseleave),window.removeEventListener("keyup",this.onKeyup)}onDrawClick(e){this.emit("draw_click",e)}onBodyClick(e){this.emit("body_click",e)}onSvgMousedown(e){this.emit("svg_mousedown",e)}onMousedown(e){1===e.which?this.isLeftMousedown=!0:3===e.which&&(this.isRightMousedown=!0),this.mousedownPos.x=e.clientX,this.mousedownPos.y=e.clientY,this.emit("mousedown",e,this)}onMousemove(e){let{useLeftKeySelectionRightKeyDrag:t}=this.mindMap.opt;this.mousemovePos.x=e.clientX,this.mousemovePos.y=e.clientY,this.mousemoveOffset.x=e.clientX-this.mousedownPos.x,this.mousemoveOffset.y=e.clientY-this.mousedownPos.y,this.emit("mousemove",e,this),(t?this.isRightMousedown:this.isLeftMousedown)&&(e.preventDefault(),this.emit("drag",e,this))}onMouseup(e){this.isLeftMousedown=!1,this.isRightMousedown=!1,this.emit("mouseup",e,this)}onMousewheel(e){let t;e.stopPropagation(),e.preventDefault(),e.ctrlKey?(e.deltaY>0&&(t=CONSTANTS.DIR.UP),e.deltaY<0&&(t=CONSTANTS.DIR.DOWN),e.deltaX>0&&(t=CONSTANTS.DIR.LEFT),e.deltaX<0&&(t=CONSTANTS.DIR.RIGHT)):((e.wheelDeltaY||e.detail)>0&&(t=CONSTANTS.DIR.UP),(e.wheelDeltaY||e.detail)<0&&(t=CONSTANTS.DIR.DOWN),(e.wheelDeltaX||e.detail)>0&&(t=CONSTANTS.DIR.LEFT),(e.wheelDeltaX||e.detail)<0&&(t=CONSTANTS.DIR.RIGHT));let s=!1;(e.wheelDeltaY===-3*e.deltaY||Math.abs(e.wheelDeltaY)<=10)&&(s=!0),this.emit("mousewheel",e,t,this,s)}onContextmenu(e){e.preventDefault(),this.emit("contextmenu",e)}onKeyup(e){this.emit("keyup",e)}onMouseenter(e){this.emit("svg_mouseenter",e)}onMouseleave(e){this.emit("svg_mouseleave",e)}}export default Event;