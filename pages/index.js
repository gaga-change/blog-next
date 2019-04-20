import React from 'react'
import { Layout, List, Avatar, Icon, Typography, Tag, Card } from 'antd'
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
);

class Index extends React.Component {
  static async getInitialProps({ req }) {
    let res = await Promise.all([posts(), terms()])
    let postsData = res[0].data.data
    let other = res[1].data.data
    return {
      pageSize: 10,
      count: postsData.count,
      data: postsData.list,
      tags: other.tags,
      categories: other.categories,
      posts: other.posts // 最新
    }
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
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: props.pageSize,
                }}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[<IconText type="read" text="0" />, <IconText type="like-o" text="0" />, <IconText type="message" text="0" />,
                    <span className="item-tags"><Icon type="tags" />{(<span>{item.tags.join('/')}</span>)}</span>
                    ]}
                    // extra={(<div>{item.tags.map(tag => <Tag key={tag} color="cyan">{tag}</Tag>)}</div>)}
                    // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <List.Item.Meta
                      title={(<Link href="/detail"><a>{item.title}</a></Link>)}
                      description={item.intro + '...'}
                    />

                    {/* <Tag color="gold">gold</Tag> */}
                  </List.Item>
                )}
              />
            </Content>
            <Sider className="sider">
              <div>
                <Card
                  title="分类"
                // style={{ width: 300 }}
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
                    title="标签"
                  // style={{ width: 300 }}
                  >
                    {props.tags.map(tag => (
                      <span key={tag} className="tags">
                        <Link href="/"><a>{tag}</a></Link>
                      </span>
                    ))}
                  </Card>
                </div>
              </div>
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
