import React from 'react'
import { Typography, Menu, Icon } from 'antd'

import Link from 'next/link'

const { Text, Title } = Typography
class LayoutHeader extends React.Component {
  render() {
    return (
      <div className="LayoutHeaderComponent">
        <div className="container">
          <div className="left-area">
            <Link href="/">
              <a>
                <Title level={3}>严俊东<Text type="secondary" className="title-des"> &#8211; 严俊东个人博客</Text></Title>
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