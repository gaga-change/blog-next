import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta name="description" content="严俊东的个人博客。技术包括但不限于JavaScript、NodeJS、CSS3、HTML以及各类编程开发等相关内容。邮箱gaga_change@qq.com，微信号gaga_change。" />
          <meta name="keywords" content="严俊东,严俊东个人博客,严俊东博客,个人博客,Next.js个人博客" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="//cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css" />
          <link href="//cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css" rel="stylesheet"></link>
        </Head>
        <body>
          <a href="https://github.com/gaga-change/blog-next" target="blank"><img style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149" alt="Fork me on GitHub" /></a>
          <Main />
          <NextScript />
          <script src="//cdn.yanjd.top/blog/js/baidu.js"></script>
        </body>
      </html>
    )
  }
}
