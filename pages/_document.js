import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="//cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css" />
          <link href="//cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="//cdn.yanjd.top/yanjd/js/baidu.js"></script>
        </body>
      </html>
    )
  }
}
