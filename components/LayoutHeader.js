import { Menu, Typography } from 'antd'

import Link from 'next/link'
import React from 'react'

const { Text, Title } = Typography
class LayoutHeader extends React.Component {
  render() {
    return (
      <div className="LayoutHeaderComponent">
        <div className="container">
          <div className="left-area">
            <Link href="/">
              <a>
                <Title level={3}>严俊东博客<Text type="secondary" className="title-des"> &#8211; 分享技术的小站</Text></Title>
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

export default LayoutHeader