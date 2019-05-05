import Base from './Base'
import { Layout } from 'antd'
import LayoutHeader from './LayoutHeader'
import LayoutRight from './LayoutRight'
import LayoutFooter from './LayoutFooter'

const { Header, Footer, Sider, Content } = Layout

const BaseLayout = props => (
  <Base>
    <div className="page-index">
      <Layout className="layout-total">
        <Header className="header">
          <LayoutHeader />
        </Header>
        <Layout className="layout-con container">
          <Content className="content">
            {props.children}
          </Content>
          <Sider className="sider">
            <LayoutRight />
          </Sider>
        </Layout>
        <Footer className="footer">
          <LayoutFooter />
        </Footer>
      </Layout>
    </div>
  </Base >
)

export default BaseLayout