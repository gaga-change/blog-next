import React from 'react'
import { Typography } from 'antd'
import Link from 'next/link'

const { Text, Title } = Typography
class LayoutHeader extends React.Component {
  render() {
    return (
      <div className="container">
        <Link href="/">
          <a>
            <Title level={3}>严俊东<Text type="secondary" className="title-des"> &#8211; 严俊东个人博客</Text></Title>
          </a>
        </Link>
      </div>
    )
  }
}

export default LayoutHeader