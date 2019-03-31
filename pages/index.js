import { Layout } from 'antd'
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import './index.scss'
const {
  Header, Footer, Sider, Content,
} = Layout;


const Index = (props) => (
  <div>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>
          {
            props.data._embedded.posts.map((item, index) => (
              <div key={index}>
                <Link href="/detail"><a key={index}>
                  {item.title}
                </a></Link>
              </div>
            ))
          }
        </Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  </div>
)

Index.getInitialProps = async function ({ req }) {
  !req && NProgress.start()
  const res = await fetch((req ? 'http://blog.api.yanjd.top' : '/api') + '/posts?projection=postSmall')
  const data = await res.json()
  !req && NProgress.done()
  return {
    data
  }
}

export default Index
