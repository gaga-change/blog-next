import React from 'react'
import { connect } from 'react-redux'
import Base from '../components/BaseLayout'
import { post, terms } from '../api'
import { setMenu } from '../store'

class Detail extends React.Component {
  static async getInitialProps({ req, query, reduxStore }) {
    let isServer = !!req
    let { id } = query
    let res = await post(isServer, id)
    if (!reduxStore.getState().menu) {
      let { data } = await terms(isServer)
      reduxStore.dispatch(setMenu(data.data))
    }
    return {
      detail: res.data.data
    }
  }

  componentDidMount() {
    // console.log(this.props.detail)
  }

  render() {
    const { detail } = this.props
    return (
      <Base><div className="page-detail">
        <div>
          <h1 className="title">{detail.title}</h1>
          <div className="md-style" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
        </div>
      </div></Base>
    )
  }

}

export default connect()(Detail)