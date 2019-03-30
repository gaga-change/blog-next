import { Layout } from 'antd'
import Head from 'next/head';

import './index.scss'
const {
  Header, Footer, Sider, Content,
} = Layout;


export default () => (
  <div>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
)
