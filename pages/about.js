import Base from '../components/BaseLayout'
import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import { setMenu } from '../store'
import { terms } from '../api'

class Detail extends React.Component {

  static async getInitialProps({ req, query, reduxStore }) {
    let isServer = !!req
    if (!reduxStore.getState().menu) {
      let data = await terms(isServer)
      reduxStore.dispatch(setMenu(data))
    }
    return {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <Base><div className="page-detail">
        <Head>
          <title>关于我</title>
        </Head>
        <div>
          <h1 className="title">关于我</h1>
          <div className="md-style">
            <p>
              普普通通的一个人，做普普通通的事。

  平平淡淡的一个前端开发，或者我更喜欢说我是个JS开发，虽然工作一直都是与前端相关。

  目前专注NodeJS开发，不知道还得走多久，但我知道还需要走很久。

  学无止境，成功留给有准备的人！
            </p>
            <p>
              <i class="fa fa-user"></i>
              微信:<a href="//www.yanjd.top">gaga_change</a>
            </p>
            <p>
              <i class="fa fa-user"></i>
              QQ:<a href="//www.yanjd.top">1172482914</a>
            </p>
            <p>
              <i class="fa fa-envelope"></i>
              邮箱:<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=q8zKzMr0yMPKxczO69rahcjExg"
                style={{ 'text-decoration': 'none' }}>gaga_change@qq.com</a>
            </p>
            <p>
              <i class="fa fa-github"></i>
              GitHub:<a href="https://github.com/gaga-change" target="_blank" rel="noopener">@gaga-change</a>
            </p>
          </div>
        </div>
      </div></Base >
    )
  }

}

export default connect()(Detail)