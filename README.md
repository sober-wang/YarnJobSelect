# YarnJobSelect
新的 Yarn ResourceManager 查询界面

# Python 版本
请使用 Python 3.6 版本
```shell
python -V
```

# 后端使用 Django 写成
安装 Django
```shell
sudo pip install Django
```

# 前端使用 Vue.js
在 web/index.html 使用 CDN 引入 Vue 框架

# 配置文件目录
app/yarnjobselect/conf

* select.ini 挑选服务的配置文件

# 部署注意事项
Django 对 sqlite3 有依赖，如果提示:`No module named _sqlite3 `
```shell
# 运行以下命令
sudo yum install sqlite-dev
sudo apt install sqlite-dev

# 重新编译你的 python3 环境
cd Python3.6
./configure --prefix=/home/sober/python3
make && make install
```

# 服务启动方式
```shell
# 端口 可以自定义,
python3.6 manage.py runserver 192.168.1.1:9331
```
设置 IP 时需要 修改 app/yarnjobselect/settings.py
添加如下配置
ALLOWED_HOSTS = ["192.168.1.1"]

