# Next.js 博客站点

前台使用 Next.js + antd。

后台管理使用 Vue + ElementUI。项目地址：[blog-admin](https://github.com/gaga-change/blog-admin)

API 使用 EGG.js + mongodb。项目地址：[gaga-change](https://github.com/gaga-change/gaga-change)


效果图：

* * *
![首页](https://cdn.yanjd.top/blog/github/img/blog-home.png?imageView2/0/format/jpg/q/80|imageslim)

* * *
![详情页](https://cdn.yanjd.top/blog/github/img/blog-detail.png?imageView2/0/format/jpg/q/80|imageslim)

* * *

## 安装依赖

```bash
npm i
```

## 运行

```bash
npm run start
```

## Docker 镜像

### 环境变量

* `BLOG_API_URL` 提供api的服务url
* `QINIU_ACCESS_KEY` 七牛云 accessKey
* `QINIU_SECRET_KEY` 七牛云 secretKey


### 备注

vscode 插件 `sort-imports`
