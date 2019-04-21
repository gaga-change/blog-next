# next.js 博客站点


## Docker 镜像

### 环境变量

`BLOG_API_URL` 提供api的服务url
`BLOG_NEXT_URL` 当前服务url

* 如果 api 和 next 代理到同一个域名。 
  则只配置 `BLOG_NEXT_URL` 为总代理域名

* 如果api 和 next 没有代理到一起，而是域名直接指向到 next
  则需要配置`BLOG_API_URL`为api的访问地址，`BLOG_NEXT_URL`为当前域名
