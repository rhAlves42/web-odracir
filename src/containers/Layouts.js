import React from 'react'
import { Layout } from 'antd'
import CustomHeader from '../components/CustomHeader'
import CustomIcons from '../components/CustomIcons'
import CustomSearch from '../components/CustomSearch'
import CustomAbout from '../components/CustomAbout'
import CustomCTA from '../components/CustomCTA'
import CustomFooter from '../components/CustomFooter'

const { Footer, Content } = Layout;

class CustomLayout extends React.Component{
  render() {
    return (
      <div>
        <Layout>
          <CustomHeader />
          <CustomIcons />
          <CustomSearch />
          <Content>
            <CustomAbout />
            <CustomCTA />
          </Content>
          <Footer>
            <CustomFooter />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default CustomLayout;
