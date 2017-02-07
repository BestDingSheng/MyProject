## 配置环境
	1.安装node, 全局安装fis3 参考命令 npm install -g fis3
## 用命令行进入工程目录
	1.npm install 安装fis3所需依赖插件
	npm install -g fis3-parser-less-2.x
	npm install -g fis3-hook-relative
	npm install -g fis3-hook-commonjs
	npm install -g fis3-preprocessor-autoprefixer
	npm install -g fis3-postpackager-loader
## 启动fis3服务
 	fis3 release
 		发布工程到FIS自带服务器根目录
 	fis3 sever start
 		启动FIS自带服务器
 参考 http://fis.baidu.com/fis3/docs/beginning/debug.html#%E7%9B%AE%E5%BD%95
## 后台地址
  配置在文件  \components\widget\main\main.js中的 window.app.data.http
