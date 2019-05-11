import React from 'react'
import { List, Icon } from 'antd'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import { setMenu } from '../store'
import Base from '../components/BaseLayout'
import './index.less'
import { posts, terms } from '../api'

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
    let res = await posts(isServer, { page, pageSize: DEFAULT_PAGE_SIZE, tag, category })
    let postsData = res.data.data
    if (!reduxStore.getState().menu) {
      let { data } = await terms(isServer)
      reduxStore.dispatch(setMenu(data.data))
    }
    return {
      pageSize: DEFAULT_PAGE_SIZE, // 每页条数
      count: postsData.count, // 总条数
      data: postsData.list, // post列表
      page: postsData.page, // 当前页面
      pages: postsData.pages, // 总页数
      asPath,
      pathname,
      query,
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { props } = this
    return (
      <Base><div className="page-index">
        <Head>
          <title>严俊东 &#8211; 严俊东个人博客</title>
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
              actions={[<IconText type="read" text="0" />, <IconText type="like-o" text="0" />, <IconText type="message" text="0" />,
              <span className="item-tags"><Icon type="tags" />{(<span>{item.tags.map((tag, index) => (
                <span key={tag}>
                  {!!index && '/'}
                  <Link href={`/?tag=${tag}`} as={`/tags/${tag}`}>
                    <a className={props.query.tag === tag ? 'active' : ''}>{tag}</a>
                  </Link>
                </span>
              ))}</span>)}</span>
              ]}
              extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
              <List.Item.Meta
                title={(<Link href={`/detail?id=${item.id}`} as={`/archives/${item.id}`}><a>{item.title}</a></Link>)}
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
