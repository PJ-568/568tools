import{copyRenderTree,simpleDeepClone,nextTick}from"../../utils";class Command{constructor(t={}){this.opt=t,this.mindMap=t.mindMap,this.commands={},this.history=[],this.activeHistoryIndex=0,this.registerShortcutKeys(),this.addHistory=nextTick(this.addHistory,this)}clearHistory(){this.history=[],this.activeHistoryIndex=0,this.mindMap.emit("back_forward",0,0)}registerShortcutKeys(){this.mindMap.keyCommand.addShortcut("Control+z",(()=>{this.mindMap.execCommand("BACK")})),this.mindMap.keyCommand.addShortcut("Control+y",(()=>{this.mindMap.execCommand("FORWARD")}))}exec(t,...i){if(this.commands[t]){if(this.commands[t].forEach((t=>{t(...i)})),["BACK","FORWARD","SET_NODE_ACTIVE","CLEAR_ACTIVE_NODE"].includes(t))return;this.addHistory()}}add(t,i){this.commands[t]?this.commands[t].push(i):this.commands[t]=[i]}remove(t,i){if(this.commands[t])if(i){let e=this.commands[t].find((t=>t===i));-1!==e&&this.commands[t].splice(e,1)}else this.commands[t]=[],delete this.commands[t]}addHistory(){if(this.mindMap.opt.readonly)return;let t=this.getCopyData();this.history.length>0&&JSON.stringify(this.history[this.history.length-1])===JSON.stringify(t)||(this.history=this.history.slice(0,this.activeHistoryIndex+1),this.history.push(simpleDeepClone(t)),this.history.length>this.mindMap.opt.maxHistoryCount&&this.history.shift(),this.activeHistoryIndex=this.history.length-1,this.mindMap.emit("data_change",this.removeDataUid(t)),this.mindMap.emit("back_forward",this.activeHistoryIndex,this.history.length))}back(t=1){if(!this.mindMap.opt.readonly&&this.activeHistoryIndex-t>=0){this.activeHistoryIndex-=t,this.mindMap.emit("back_forward",this.activeHistoryIndex,this.history.length);let i=simpleDeepClone(this.history[this.activeHistoryIndex]);return this.mindMap.emit("data_change",this.removeDataUid(i)),i}}forward(t=1){if(this.mindMap.opt.readonly)return;let i=this.history.length;if(this.activeHistoryIndex+t<=i-1){this.activeHistoryIndex+=t,this.mindMap.emit("back_forward",this.activeHistoryIndex,this.history.length);let i=simpleDeepClone(this.history[this.activeHistoryIndex]);return this.mindMap.emit("data_change",this.removeDataUid(i)),i}}getCopyData(){return copyRenderTree({},this.mindMap.renderer.renderTree,!0)}removeDataUid(t){t=simpleDeepClone(t);let i=t=>{delete t.data.uid,t.children&&t.children.length>0&&t.children.forEach((t=>{i(t)}))};return i(t),t}}export default Command;