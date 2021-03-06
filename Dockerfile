# 将官方 node 用作父镜像
FROM node:latest
# 将工作目录设置为 /usr/src/node
WORKDIR /home/guozishu/project
# 拷贝当前的目录所有文件到工作目录
ADD . /home/guozishu/project/
# 安装依赖包
RUN npm install
RUN npm run prod:build
# 使端口 8080 可供此容器外的环境使用
# EXPOSE 8080
# 在容器启动时运行
CMD ["npm","start"]