import React from 'react'
import Link from 'next/link'
import Base from '../components/Base'
import { post } from '../api'

class Detail extends React.Component {
  static async getInitialProps({ req, query }) {
    let isServer = !!req
    let { id } = query
    let res = await post(isServer, id)
    return {
      detail: res.data.data
    }
  }

  componentDidMount() {
    console.log(this.props.detail)
  }

  render() {
    const { detail } = this.props
    return (
      <Base>
        <div>
          <Link href="/">
            <a>首页</a>
          </Link>
          <div>
            <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
          </div>
        </div>
      </Base>
    )
  }

}

export default Detail