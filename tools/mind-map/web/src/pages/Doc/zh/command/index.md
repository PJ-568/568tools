# Command实例

`command`实例负责命令的添加及执行，内置了很多命令，也可以自行添加，命令指需要在历史堆栈数据里添加副本的操作。可通过`mindMap.command`获取到该实例

## 方法

### add(name, fn)

添加命令。

`name`：命令名称

`fn`：命令要执行的方法

### remove(name, fn)

移除命令。

`name`：要移除的命令名称

`fn`：要移除的方法，不传的话移除该命令所有的方法

### getCopyData()

获取渲染树数据副本

### clearHistory()

清空历史堆栈数据