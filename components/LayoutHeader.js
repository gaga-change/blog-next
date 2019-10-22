import { Menu, Typography } from 'antd'
import { connect } from 'react-redux'
import Link from 'next/link'
import React from 'react'

const { Text, Title } = Typography
class LayoutHeader extends React.Component {
  render() {
    const { webSet = {} } = this.props.menu
    const { header = '', subhead = '' } = webSet
    return (
      <div className="LayoutHeaderComponent">
        <div className="container">
          <div className="left-area">
            <Link href="/">
              <a>
                <Title level={3}>{header}<Text type="secondary" className="title-des"> &#8211; {subhead}</Text></Title>
              </a>
            </Link>
          </div>
          <div className="right-area">
            <Menu mode="horizontal">
              <Menu.Item key="home">
                <Link href="/">
                  <a>首页</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="archives">
                <Link href="/archives">
                  <a>归档</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link href="/about">
                  <a>关于我</a>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ menu: state.menu || {} }))(LayoutHeader)