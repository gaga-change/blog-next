import React from 'react'
import { Icon, Card, Affix } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Link from 'next/link'

function mapStateToProps(state) {
  const { menu } = state
  return { menu: { ...menu } }
}

class LayoutRight extends React.Component {
  static async getInitialProps({ query }) {
    return {
      query
    }
  }
  render() {
    const { menu, query = {} } = this.props
    const { tags = [], categories = [], posts = [] } = menu

    return (
      <Affix>
        <Card
          title={(<span>  <Icon type="folder" /><span className="ml5">分类</span> </span>)}
        >
          {categories.map(category => (
            <div key={category._id}>
              <Link href={`/?category=${category._id}`} as={`/categories/${category._id}`}>
                <a className={query.category === category._id ? 'active' : ''}>{category.name}</a>
              </Link>
            </div>
          ))}
        </Card>
        <div style={{ marginTop: 16 }}>
          <Card
            size="small"
            title={(<span>  <Icon type="tag" /><span className="ml5">标签</span> </span>)}
          >
            {tags.map(tag => (
              <span key={tag._id} className="tags">
                <Link href={`/?tag=${tag._id}`} as={`/tags/${tag._id}`}>
                  <a className={query.tag === tag._id ? 'active' : ''}>{tag.name}</a>
                </Link>
              </span>
            ))}
          </Card>
        </div>
        <div style={{ marginTop: 16 }}>
          <Card
            size="small"
            title={(<span>  <Icon type="file" /><span className="ml5">最新文章</span> </span>)}
          >
            {posts.map((post, i) => (
              <div className={!!i ? 'mt5' : ''} key={post._id}>
                <Link href={`/detail?id=${post._id}`} as={`/archives/${post._id}`}><a className="text-ellipsis" title={post.title}>{post.title}</a></Link>
              </div>
            ))}
          </Card>
        </div>
      </Affix>
    )
  }
}

export default connect(mapStateToProps)(withRouter(LayoutRight))