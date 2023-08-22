import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';
import EmptyPage from './Components/Pages/EmptyPage';
import ListMenu from './Components/MenuData';
import Page_A from './Components/Pages/Page_A';


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
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
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
              minHeight: 280,
              background: colorBgContainer,
              height: '100vh'
            }}
          >
            <Routes>
              <Route path='*' element={<EmptyPage />} />
              <Route path='/LoginPage' element={<LoginPage />} />
              <Route path='/page_a' element={<Page_A />} />



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
