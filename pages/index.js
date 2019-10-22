import { Icon, List } from 'antd'
import { posts, terms } from '../api'

import Base from '../components/BaseLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
import { setMenu } from '../store'
import { withRouter } from 'next/router'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

const MyLink = ({ page, ele, query }) => {
  page === 1 && (page = '')
  if (query.tag) {
    return <Link href={`/?tag=${query.tag}&page=${page}`} as={`/tags/${query.tag}${!!page ? ('/' + page) : ''}`}>
      {ele}
    </Link >
  } else if (query.category) {
    return <Link href={`/?category=${query.category}&page=${page}`} as={`/categories/${query.category}${!!page ? ('/' + page) : ''}`}>
      {ele}
    </Link >
  } else {
    if (!page) {
      return <Link href={`/`} as={`/`}>
        {ele}</Link >
    }
    return <Link href={`/?page=${page}`} as={`/page/${page}`}>
      {ele}
    </Link >
  }
}

const DEFAULT_PAGE_SIZE = 10
class Index extends React.Component {

  static async getInitialProps({ req, query, asPath, pathname, reduxStore }) {
    let isServer = !!req
    let { page, tag, category } = query
    page = Number(page) || 1
    let res = posts(isServer, { pageNum: page, pageSize: DEFAULT_PAGE_SIZE, tags: tag, category })
    res = await res
    let postsData = res.data
    if (!reduxStore.getState().menu) {
      let data = terms(isServer)
      data = await data
      reduxStore.dispatch(setMenu(data))
    }
    let title = `严俊东个人博客 - ${page === 1 ? '首页' : `第${page}页`}`
    {
      const { tags, categories } = reduxStore.getState().menu
      if (tag) {
        let item = tags.find(v => v._id === tag)
        title = `${item.name} - 标签 - 严俊东个人博客${page === 1 ? '' : `- 第${page}页`}`
      } else if (category) {
        let item = categories.find(v => v._id === category)
        title = `${item.name} - 分类 - 严俊东个人博客${page === 1 ? '' : `- 第${page}页`}`
      }
    }
    return {
      pageSize: DEFAULT_PAGE_SIZE, // 每页条数
      count: postsData.total, // 总条数
      data: postsData.list, // post列表
      page: page, // 当前页面
      pages: DEFAULT_PAGE_SIZE, // 总页数
      asPath,
      pathname,
      query,
      title
    }
  }

  render() {
    const { props } = this
    return (
      <Base><div className="page-index">
        <Head>
          <title>{props.title}</title>
        </Head>
        <List
          className="list"
          split={true}
          itemLayout="vertical"
          size="large"
          dataSource={props.data}
          pagination={{
            itemRender: (page, type, originalElement) => {
              if ((page === 0 && type === 'prev') || (page === props.page && type === 'next')) return originalElement
              if (type == 'page') {
                return (<MyLink page={page} ele={originalElement} pathname={props.pathname} query={props.query} />)
              }
              return (<MyLink page={page} ele={originalElement} pathname={props.pathname} query={props.query} />)
            },
            total: props.count,
            pageSize: props.pageSize,
            current: props.page
          }}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<IconText type="read" text={item.readTime} />,
              // <IconText type="like-o" text="0" />,
              // <IconText type="message" text="0" />,
              <span className="item-tags"><Icon type="tags" />{(<span>{item.tags.map((tag, index) => (
                <span key={tag._id}>
                  {!!index && '/'}
                  <Link href={`/? tag = ${tag.name} `} as={` / tags / ${tag._id} `}>
                    <a className={props.query.tag === tag._id ? 'active' : ''}>{tag.name}</a>
                  </Link>
                </span>
              ))}</span>)}</span>
              ]}
              extra={!!item.logos[0] && <img width={272} alt="logo" src={item.logos[0].url + '?imageView2/1/w/272/h/168/format/jpg/q/100'} />}
            >
              <List.Item.Meta
                title={(<Link href={`/ detail ? id = ${item._id} `} as={` / archives / ${item._id} `}><a>{item.title}</a></Link>)}
                description={item.intro + '...'}
              />
            </List.Item>
          )}
        />
      </div>
      </Base>
    )
  }
}

export default connect()(withRouter(Index))
