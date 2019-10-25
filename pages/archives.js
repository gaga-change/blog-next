import { posts, terms } from '../api'

import Base from '../components/BaseLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Timeline } from 'antd';
import { connect } from 'react-redux'
import { setMenu } from '../store'

class Detail extends React.Component {

  static async getInitialProps({ req, reduxStore }) {
    let isServer = !!req
    if (!reduxStore.getState().menu) {
      let p = terms(isServer)
      let data = await p
      reduxStore.dispatch(setMenu(data))
    }
    let res = posts(isServer, { pageSize: 9999, select: 'id title releaseDate -logos -tags -category' })
    res = await res

    const archives = {};
    res.data.list.forEach(item => {
      const key = new Date(item.releaseDate).getFullYear();
      archives[key] = archives[key] || [];
      archives[key].push(item);
    });
    return {
      archives,
      list: res.data.list,
      webSet: reduxStore.getState().menu.webSet
    }
  }

  turnDate = d => {
    let date = new Date(d)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  render() {
    const { list, webSet } = this.props
    return (
      <Base><div className="page-detail">
        <Head>
          <title>归档 - {webSet.header}</title>
        </Head>
        <div className="mt20">
          <Timeline mode="alternate">
            {
              list.map(post => {
                let releaseDate = this.turnDate(post.releaseDate)
                return <Timeline.Item color="#e8e8e8" key={post._id}>
                  <Link href={`/detail?id=${post._id}`} as={`/archives/${post._id}`}><a className="c-333" title={`${post.title} ${releaseDate}`}>
                    <span className="text-ellipsis" >{post.title} {releaseDate}</span>
                  </a></Link>
                </Timeline.Item>
              })
            }
          </Timeline>
        </div>
      </div></Base >
    )
  }

}

export default connect()(Detail)