import React from 'react'
import Link from 'next/link'

class LayoutFooter extends React.Component {

  render() {
    return (
      <div className="footer">
        Copyright © 2019<Link href="/"><a rel="nofollow">严俊东</a></Link> | <a rel="nofollow" target="_blank" href="//www.beian.miit.gov.cn">浙ICP备17054210号-2</a>
      </div>
    )
  }
}

export default LayoutFooter