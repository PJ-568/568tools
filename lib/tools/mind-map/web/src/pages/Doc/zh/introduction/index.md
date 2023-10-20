# 简介

`simple-mind-map`是一个简单&强大的Web思维导图库，不依赖任何特定框架。可以帮助你快速开发思维导图产品。

> 如果你只是想使用思维导图，你也完全可以把本项目的demo作为一个普通的在线思维导图工具使用。点击右上角的【在线示例】开始使用吧。
>
> 另外也提供了客户端可供下载，支持`Windows`、`Mac`及`Linux`，[点此了解更多](/mind-map/#/doc/zh/client)。

## 特性

- [x] 插件化架构，除核心功能外，其他功能作为插件提供，按需使用，减小整体体积
- [x] 支持逻辑结构图、思维导图、组织结构图、目录组织图、时间轴、鱼骨图六种结构
- [x] 内置多种主题，允许高度自定义样式，支持注册新主题
- [x] 支持快捷键
- [x] 节点内容支持图片、图标、超链接、备注、标签、概要
- [x] 支持前进后退
- [x] 支持拖动、缩放
- [x] 支持右键和Ctrl+左键两种多选方式
- [x] 支持节点自由拖拽、拖拽调整
- [x] 支持多种节点形状
- [x] 支持导出为`json`、`png`、`svg`、`pdf`、`markdown`，支持从`json`、`xmind`、`markdown`导入
- [x] 支持小地图、支持水印
- [x] 支持关联线

## 仓库目录介绍

1.`simple-mind-map`

思维导图库，框架无关，`Vue`、`React`等框架或无框架都可以使用。

2.`web`

使用`simple-mind-map`库，基于`vue2.x`、`ElementUI`搭建的在线思维导图。特性：

- [x] 工具栏，支持插入节点、删除节点；编辑节点图片、图标、超链接、备注、标签、概要
- [x] 侧边栏，基础样式设置面板、节点样式设置面板、大纲面板、主题选择面板、结构选择面板
- [x] 导入导出功能；数据默认保存在浏览器本地存储，也支持直接创建、打开、编辑电脑本地文件
- [x] 右键菜单，支持展开、收起、整理布局等操作
- [x] 底部栏，支持节点数量、字数统计；支持切换编辑和只读模式；支持放大缩小；支持全屏切换；支持小地图

提供文档页面服务。

3.`dist`

打包`web`后的资源文件夹。

## 相关文章

[Web思维导图实现的技术点分析](https://juejin.cn/post/6987711560521089061)

[只需百来行代码，为你的Web页面增加本地文件操作能力，确定不试试吗？](https://juejin.cn/post/7157681502506090510)

[当你按下方向键，电视是如何寻找下一个焦点的](https://juejin.cn/post/7199666255883927612)

[如何在canvas中模拟css的背景图片样式](https://juejin.cn/post/7204854015463538744)

[我的第一个Electron应用](https://juejin.cn/post/7233012756314701884)

## 特别说明

本项目可用于学习和参考，用于实际项目时请先深度体验一下是否能满足您的需求。

本项目可能没有完整测试到每一个功能点，所以可能存在bug，另外，当节点数量非常多的时候，性能也存在一些问题，因为每个人能接受的卡顿程度不一样，所以你可以自行测试节点数量上限。

如果有建议或发现了bug，可以在此提交[issues](https://github.com/wanglin2/mind-map/issues)。

项目内置的主题和图标来自于：

[百度脑图](https://naotu.baidu.com/)

[知犀思维导图](https://www.zhixi.com/)

尊重版权，主题和图标请勿直接用于商业项目。

## 为什么不是？

1.[知犀](https://www.zhixi.com/)

知犀是一个免费的思维导图产品，支持多端同步，ui设计很漂亮，功能也很齐全，但是它并不开源，所以只能作为一个用户，而无法在你的项目中使用。

类似知犀的其他在线思维导图产品还有很多，比如[GitMind](https://gitmind.cn/)、[MindLine](http://www.mindline.cn/)、[MinMeister](https://www.mindmeister.com/zh)、[幕布](https://mubu.com/)等等，搜索引擎上搜索一下非常多，但是这些产品或者是要收费，或者是小公司开发的，稳定性和持续性无法保证，当然最关键的就是它们都不开源。

2.[kityminder-core](https://github.com/fex-team/kityminder-core)

`kityminder-core`是百度开发的开源的脑图工具，功能很强大，性能也很好，但是它已经不维护了，所以代码比较陈旧，界面美观度也比较一般，另外bug只能自己修，功能只能自己开发，对前端开发能力要求比较高。

3.[jsmind](https://github.com/hizzgdev/jsmind)、[Mind-elixir](https://github.com/ssshooter/mind-elixir-core)、[my-mind](https://github.com/ondras/my-mind)、[blink-mind](https://github.com/awehook/blink-mind)、[remind](https://github.com/luvsic3/remind)、[vue3-mindmap](https://github.com/hellowuxin/vue3-mindmap)、[ZMindMap](https://github.com/zyascend/ZMindMap)...

这些开源的思维导图也都不错，各有各的特点，但是它们也都有一定缺点，比如停止更新、界面美观度一般、功能比较少、依赖某个框架等等。

综上，在开源的思维导图中，你很难找到一个比`simple-mind-map`更好的选择。当然，`simple-mind-map`也远远谈不上最好，它也有很多不足，如你在前面的【特别说明】所看到的那样，不过`simple-mind-map`一直处于快速迭代中，欢迎你加入进来一起完善它。

## 浏览器兼容性

推荐使用最新版`chrome`浏览器。

有限测试情况：

正常运行：`360`极速浏览器（v13.5.2036.0）、`opera`浏览器（v71.0.3770.284）。

非正常运行：`Firefox`（v98.0.2），富文本模式下节点内容无法显示，如果要支持`Firefox`浏览器，请使用非富文本模式。

不支持：`IE`浏览器。

## License

[MIT](https://opensource.org/licenses/MIT)

## 请作者喝杯咖啡

开源不易，如果本项目有帮助到你的话，可以请作者喝杯咖啡哟~

> 转账请备注【思维导图】。你的头像和名字将会出现在下面。

<img src="../../../../assets/img/alipay.jpg" style="width: 300px" />

<img src="../../../../assets/img/wechat.jpg" style="width: 300px" />

<div  style="display: flex;">
    <div style="display: flex; flex-direction: column; align-items: center; width: fit-content; margin: 5px;">
        <img src="../../../../assets/avatar/Think.jpg" style="width: 50px;height: 50px;object-fit: cover;border-radius: 50%;" />
        <p>Think</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: fit-content; margin: 5px;">
        <img src="../../../../assets/avatar/志斌.jpg" style="width: 50px;height: 50px;object-fit: cover;border-radius: 50%;" />
        <p>志斌</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: fit-content; margin: 5px;">
        <img src="../../../../assets/avatar/小土渣的宇宙.jpeg" style="width: 50px;height: 50px;object-fit: cover;border-radius: 50%;" />
        <p>小土渣的宇宙</p>
    </div>
</div>