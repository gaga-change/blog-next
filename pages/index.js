import React from 'react'
import { Layout, List, Icon, Typography, Card, Affix } from 'antd'
import Head from 'next/head';
import Link from 'next/link'
import './index.scss'
import { posts, terms } from '../api'

const { Text, Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

const MyLink = ({ href, ele }) => (
  <Link href={href}>
    {ele}
  </Link>
)


const DEFAULT_PAGE_SIZE = 10
class Index extends React.Component {

  static async getInitialProps({ req, query }) {
    let { page = 1 } = query
    let res = await Promise.all([posts({ page, pageSize: DEFAULT_PAGE_SIZE }), terms()])
    let postsData = res[0].data.data
    let other = res[1].data.data
    return {
      pageSize: DEFAULT_PAGE_SIZE, // 每页条数
      count: postsData.count, // 总条数
      data: postsData.list, // post列表
      tags: other.tags, // tag 列表
      categories: other.categories, // 分类列表
      posts: other.posts, // 最新 post
      page: postsData.page, // 当前页面
      pages: postsData.pages, // 总页数
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { props } = this
    return (
      <div className="page-index">
        <Head>
          <title>严俊东 &#8211; 严俊东个人博客</title>
        </Head>
        <Layout className="layout-total">
          <Header className="header">
            <div className="container">
              <Title level={3}>严俊东<Text type="secondary" className="title-des"> &#8211; 严俊东个人博客</Text></Title>
            </div>
          </Header>
          <Layout className="layout-con container">
            <Content className="content">
              <List
                className="list"
                split={true}
                itemLayout="vertical"
                size="large"
                dataSource={props.data}
                pagination={{
                  itemRender: (page, type, originalElement) => {
                    if ((page === 0 && type === 'prev') || (page === props.pages && type === 'next')) return originalElement
                    if (type == 'page') {
                      return (<MyLink href={`/?page=${page}`} ele={originalElement} />)
                    }
                    return (<MyLink href={`/?page=${page}`} ele={originalElement} />)

                  },
                  total: props.count,
                  pageSize: props.pageSize,
                  current: props.page
                }}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[<IconText type="read" text="0" />, <IconText type="like-o" text="0" />, <IconText type="message" text="0" />,
                    <span className="item-tags"><Icon type="tags" />{(<span>{item.tags.join('/')}</span>)}</span>
                    ]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <List.Item.Meta
                      title={(<Link href="/detail"><a>{item.title}</a></Link>)}
                      description={item.intro + '...'}
                    />
                  </List.Item>
                )}
              />
            </Content>
            <Sider className="sider">
              <Affix>
                <Card
                  title={(<span>  <Icon type="folder" />分类 </span>)}
                >
                  {props.categories.map(category => (
                    <div key={category}>
                      <Link href="/"><a>{category}</a></Link>
                    </div>
                  ))}
                </Card>
                <div style={{ marginTop: 16 }}>
                  <Card
                    size="small"
                    title={(<span>  <Icon type="tag" />标签 </span>)}
                  >
                    {props.tags.map(tag => (
                      <span key={tag} className="tags">
                        <Link href="/"><a>{tag}</a></Link>
                      </span>
                    ))}
                  </Card>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Card
                    size="small"
                    title={(<span>  <Icon type="file" />最新文章 </span>)}
                  >
                    {props.posts.map(post => (
                      <div key={post.id}>
                        <Link href="/"><a>{post.title}</a></Link>
                      </div>
                    ))}
                  </Card>
                </div>
              </Affix>
            </Sider>
          </Layout>
          <Footer className="footer">
            Copyright © 2019<a href="/" rel="nofollow">严俊东</a> | <a rel="nofollow" target="_blank" href="http://www.miitbeian.gov.cn/">浙ICP备17054210号-2 </a>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default Index
