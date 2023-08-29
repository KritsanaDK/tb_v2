import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';
import EmptyPage from './Components/Pages/EmptyPage';
import ListMenu from './Components/MenuData';
import Page_A from './Components/Pages/Page_A';
import Page_B from './Components/Pages/Page_B';
import Page_D from './Components/Pages/Page_D';
import Page_E from './Components/Pages/Page_E';
import Page_F from './Components/Pages/Page_F';
import Page_G from './Components/Pages/Page_G';
import Page_H from './Components/Pages/Page_H';

import RegisterComplaintMode from './Components/Pages/RegisterComplaintMode';
import RegisterDataItems from './Components/Pages/RegisterDataItems';


import { Routes, Route } from 'react-router-dom'

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;




function App() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log();

  return (
    <>
      <Layout style={{ overflow: 'hidden', minHeight: '100vh', }}>
        <Sider trigger={null} collapsible collapsed={collapsed} width={250} >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={ListMenu}

          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: colorBgContainer,

            }}
          >
            <Routes>
              <Route path='*' element={<EmptyPage />} />
              <Route path='/LoginPage' element={<LoginPage />} />
              <Route path='/page_a' element={<Page_A />} />
              <Route path='/page_b' element={<Page_B />} />
              <Route path='/page_d' element={<Page_D />} />
              <Route path='/page_e' element={<Page_E />} />
              <Route path='/page_f' element={<Page_F />} />
              <Route path='/page_g' element={<Page_G />} />
              <Route path='/page_h' element={<Page_H />} />
              <Route path='/RegisterComplaintMode' element={<RegisterComplaintMode />} />
              <Route path='/RegisterDataItems' element={<RegisterDataItems />} />






              {/* <Route path='/topics' element={<Topics />} />
              <Route path='/settings' element={<Settings />} /> */}
            </Routes>

          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
