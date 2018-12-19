
## MongoDB
### 下载与安装
* 官网下载没反应，可通过[百度网盘下载](https://pan.baidu.com/s/13MtML0FrMGNvroodJ5Scgg)，提取码：`r02f`
* [安装教程](https://blog.csdn.net/heshushun/article/details/77776706)

### 要点
* 查看MongoDB服务：`计算机` - `管理` - `服务与应用程序` - `服务`
* 使用管理员身份启动cmd来配置windows服务，完成后可通过`net start MongoDB`来启动MongoDB服务
* 关闭MongoDB服务： `net stop MongoDB`
* 可通过访问`http://localhost:27017 `来检查MongoDB是否启动，`27017`是mongodb的端口号

> It looks like you are trying to access MongoDB over HTTP on the native driver port. -- 出现这句话则MongoDB已启动


## Robomongo： MongoDB可视化工具
### 下载与安装
* [云盘传送门](https://pan.baidu.com/s/1lcXx2NbPyfazUAzFUhaSwQ) 提取码：`4ndb`
* [安装教程](https://blog.csdn.net/u011684839/article/details/80911732)

## express
### [官网](http://www.expressjs.com.cn/)
### 安装
* 进入项目根目录，创建package.json 文件

  ```bash
  npm init
  ```

* 安装express
  ```bash
  npm install express --save
  ```
