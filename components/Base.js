import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import '../asserts/styles.less'

// import 'nprogress/nprogress.css'
// import '../asserts/styles.less'
// import { LocaleProvider, BackTop } from 'antd';
import { BackTop } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';

// moment.locale('zh-cn');

const handleRouteChange = url => {
  NProgress.start()
}

const routeChangeComplete = () => {
  NProgress.done()
}

Router.events.on('routeChangeStart', handleRouteChange);
Router.events.on('routeChangeComplete', routeChangeComplete);
class Base extends React.Component {
  render() {
    return (
      // <LocaleProvider locale={zh_CN}>
      //   <div>
      //     {this.props.children}
      //     <BackTop />
      //   </div>
      // </LocaleProvider>

      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          {/* <link rel='stylesheet' href='/_next/static/style.css' /> */}
        </Head>
        {this.props.children}
        <BackTop />
      </div>
    )
  }
}

export default Base