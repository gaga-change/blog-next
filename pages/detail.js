import { autoAddReadTime, post, terms } from '../api'

import Base from '../components/BaseLayout'
import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import { setMenu } from '../store'

class Detail extends React.Component {
  static async getInitialProps({ req, query, reduxStore }) {
    let isServer = !!req
    let { id } = query
    let res = post(isServer, id)
    res = await res
    if (!reduxStore.getState().menu) {
      let data = terms(isServer)
      data = await data
      reduxStore.dispatch(setMenu(data))
    }
    return {
      detail: res.data,
      webSet: reduxStore.getState().menu.webSet
    }
  }

  componentDidMount() {
    autoAddReadTime(this.props.detail._id)
  }

  render() {
    const { detail, webSet } = this.props
    return (
      <Base><div className="page-detail">
        <Head>
          <title>{detail.title} - {webSet.header}</title>
        </Head>
        <div>
          <h1 className="title">{detail.title}</h1>
          <div className="md-style" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
        </div>
      </div></Base>
    )
  }

}

export default connect()(Detail)