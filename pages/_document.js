import Document, { Head, Main, NextScript } from 'next/document'

const description = process.env.WBE_SET_DESCRIPTION
const keywords = process.env.WBE_SET_KEYWORDS
const appendJsFileUrl = process.env.WEB_SET_APPEND_JS_FILE_URL
class MyDocument extends Document {
  render() {
    return (
      <html lang="zh">
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="//cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css" />
          <link href="//cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css" rel="stylesheet"></link>
        </Head>
        <body>
          <a href="https://github.com/gaga-change/blog-next" target="blank"><img style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149" alt="Fork me on GitHub" /></a>
          <Main />
          <NextScript />
          {appendJsFileUrl && <script src={appendJsFileUrl}></script>}
        </body>
      </html>
    )
  }
}

export default MyDocument
