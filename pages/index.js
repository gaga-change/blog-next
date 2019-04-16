import { Layout, List, Avatar, Icon, Typography, Tag } from 'antd'
import Head from 'next/head';
import Link from 'next/link'
import './index.scss'
import { posts } from '../api'

const { Text, Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const Index = (props) => (
  <div>
    <Head>
      <title>严俊东 &#8211; 严俊东个人博客</title>
    </Head>
    <Layout>
      <Header>
        <div className="container">
          <Title level={3}>严俊东<Text type="secondary" className="title-des"> &#8211; 严俊东个人博客</Text></Title>
        </div>
      </Header>
      <Layout className="container">
        <Content>
          <List
            split={true}
            itemLayout="vertical"
            size="large"
            dataSource={props.data}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="read" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />,
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
        <Sider>Sider</Sider>
      </Layout>
      <Footer>
        Copyright © 2019<a href="/" rel="nofollow">严俊东</a> | <a rel="nofollow" target="_blank" href="http://www.miitbeian.gov.cn/">浙ICP备17054210号-2 </a>
      </Footer>
    </Layout>
  </div>
)

Index.getInitialProps = async function ({ req }) {
  let res = await posts()
  let postsData = res.data.data.list
  return {
    data: postsData
  }
}

export default Index
