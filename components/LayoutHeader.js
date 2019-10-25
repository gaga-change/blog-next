import { Menu, Typography } from 'antd'
import { connect } from 'react-redux'
import Link from 'next/link'
import React from 'react'

const { Text, Title } = Typography
class LayoutHeader extends React.Component {
  render() {
    const { webSet = {}, pageMenus = [] } = this.props.menu
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
              {pageMenus.map((item, i) => <Menu.Item key={i}>
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </Menu.Item>)}
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ menu: state.menu || {} }))(LayoutHeader)