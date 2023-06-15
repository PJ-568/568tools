(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2375fa"],{fb9a:function(s,a,n){"use strict";n.r(a);var t=function(){var s=this;s._self._c;return s._m(0)},l=[function(){var s=this,a=s._self._c;return a("div",[a("h1",[s._v("如何渲染一个右键菜单")]),a("p",[s._v("右键菜单可以方便的完成一些功能，大体上分两种，一是在画布上点击右键，二是在节点上点击右键，两者的功能肯定是不一样的，甚至根节点和其他节点功能上也有些不同，比如根节点不能添加同级节点，也不能被删除等等。")]),a("p",[s._v("右键菜单的UI界面需要你自行开发，可以设置成绝对定位或固定定位，然后让它显示在鼠标右键点击的位置即可。")]),a("h2",[s._v("右键菜单的显示和隐藏")]),a("p",[s._v("首先监听"),a("code",[s._v("node_contextmenu")]),s._v("事件在右键点击节点时显示菜单：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 当前右键点击的类型")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" type = ref("),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(")\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 如果点击的节点，那么代表被点击的节点")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" currentNode = shallowRef("),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(")\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 菜单显示的位置")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" left = ref("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(")\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" top = ref("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(")\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 是否显示菜单")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" show = ref("),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\n\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'node_contextmenu'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e, node")]),s._v(") =>")]),s._v(" {\n    type.value = "),a("span",{staticClass:"hljs-string"},[s._v("'node'")]),s._v("\n    left.value = e.clientX + "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n    top.value = e.clientY + "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n    show.value = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    currentNode.value = node\n})\n")])]),a("p",[s._v("你可以根据当前点击的节点来判断一些操作是否可用。比如根节点不能删除，不能插入同级节点，又比如同级第一个节点不能再被往上移，同级最后一个节点不能被往下移。")]),a("p",[s._v("对于画布的处理会比较麻烦，不能直接监听"),a("code",[s._v("contextmenu")]),s._v("事件，因为会和右键多选节点冲突，所以需要结合"),a("code",[s._v("mousedown")]),s._v("事件和"),a("code",[s._v("mouseup")]),s._v("事件来处理。")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 记录鼠标右键按下的位置")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" mousedownX = ref("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(")\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" mousedownY = ref("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(")\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" isMousedown = ref("),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\n\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'svg_mousedown'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(") =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 如果不是右键点击直接返回")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (e.which !== "),a("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(") {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    mousedownX.value = e.clientX\n    mousedownY.value = e.clientY\n    isMousedown.value = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n})\n\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'mouseup'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(") =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!isMousedown.value) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    isMousedown.value = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 如果鼠标松开和按下的距离大于3，则不认为是点击事件")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".abs(mousedownX.value - e.clientX) > "),a("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(" ||\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".abs(mousedownX.value - e.clientY) > "),a("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("\n    ) {\n        hide()\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    type.value = "),a("span",{staticClass:"hljs-string"},[s._v("'svg'")]),s._v("\n    left.value = e.clientX + "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n    top.value = e.clientY + "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n    show.value = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n})\n")])]),a("p",[s._v("很简单，其实就是判断鼠标按下和松开的距离是否很小，是的话就认为是点击事件，否则应该是鼠标拖动。")]),a("p",[s._v("右键菜单显示了，肯定就需要隐藏，当左键点击了画布、左键点击了节点、左键点击了展开收起按钮时都需要隐藏右键菜单。")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" hide = "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    show.value = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    left.value = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n    top.value = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n    type.value = "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("\n}\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'node_click'")]),s._v(", hide)\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'draw_click'")]),s._v(", hide)\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'expand_btn_click'")]),s._v(", hide)\n")])]),a("h2",[s._v("复制、剪切、粘贴的实现")]),a("p",[s._v("接下来介绍一下复制、剪切、粘贴的实现。")]),a("p",[s._v("一般来说你的右键菜单中肯定也会添加这三个按钮，另外快捷键操作也是必不可少的，但是这三个快捷键是没有内置的，所以你需要自己注册一下：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.keyCommand.addShortcut("),a("span",{staticClass:"hljs-string"},[s._v("'Control+c'")]),s._v(", copy)\nmindMap.keyCommand.addShortcut("),a("span",{staticClass:"hljs-string"},[s._v("'Control+v'")]),s._v(", paste)\nmindMap.keyCommand.addShortcut("),a("span",{staticClass:"hljs-string"},[s._v("'Control+x'")]),s._v(", cut)\n")])]),a("p",[s._v("如需删除调用"),a("code",[s._v("removeShortcut")]),s._v("方法即可。")]),a("p",[s._v("接下来实现一下这三个方法：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 保存复制/剪切的节点的数据，后续可以原来粘贴")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" copyData = "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" copy = "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    copyData = mindMap.renderer.copyNode()\n}\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" cut = "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'CUT_NODE'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("_copyData")]),s._v(" =>")]),s._v(" {\n        copyData = _copyData\n    })\n}\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" paste = "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'PASTE_NODE'")]),s._v(", copyData)\n}\n")])]),a("h2",[s._v("完整示例")]),a("iframe",{staticStyle:{width:"100%",height:"455px",border:"none"},attrs:{src:"https://wanglin2.github.io/playground/#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"}})])}],v={},e=v,i=n("2877"),c=Object(i["a"])(e,t,l,!1,null,null,null);a["default"]=c.exports}}]);