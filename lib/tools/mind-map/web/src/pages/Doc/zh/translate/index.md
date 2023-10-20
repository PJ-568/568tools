# 参与翻译

> 感谢[Emircan ERKUL](https://github.com/emircanerkul)提供的第一版英文翻译。
>
>因为精力有限，目前大部分翻译都是使用机翻的，所以准确度难免有问题。
>
>目前【教程】部分是没有进行翻译的，如果你有兴趣，欢迎加入我们。

如果你也想参与翻译本文档的话，可以先克隆本仓库。

翻译的文档在`/web/src/pages/Doc/`目录下，目前支持英文(`en`)、简体中文(`zh`)两种语言。

如果是新增一种语言类型，那么可以在`/web/src/pages/Doc/`目录下创建一个新目录，然后给每个章节创建一个文件夹，你也可以直接复制已存在的语言目录下的所有章节目录进行翻译，注意，你只需要编写`index.md`文件，章节目录下的`index.vue`文件是脚本根据`index.md`自动生成的。

如果是给已存在的语言类型新增翻译章节，可以在目标语言目录下创建新的章节目录，目录下只需要创建`index.md`文件即可。

当你完成翻译后，可以直接提交`Pull requests`。

如果你是前端程序员，想运行服务，查看文档页面的效果，如果新增章节，需要修改`/web/src/pages/Doc/catalogList.js`文件，在`StartList`或者`APIList`数组里选择合适的位置插入新章节的`path`。然后需要在`web`目录下运行`npm run buildDoc`编译目录和路由，最后`npm run serve`启动本地服务，打开以下路径即可查看文档：

`ip:port/#/doc/zh/introduction`

