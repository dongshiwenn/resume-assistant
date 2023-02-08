import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { Outlet, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];


const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {

  const navigateTo = useNavigate();

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  // 获取导航菜单
  const items: MenuItem[] = [
    getItem('首页', '/login'),
    getItem('简历填写', '2'),
    getItem('使用教程', '3'),
    getItem('关于', '4'),
  ];

  // 点击导航 进行跳转
  const menuClick = (e: {key: string}) => {
    console.log('点击', e);

    // 点击跳转到对应的路由
    navigateTo(e.key);
  }
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/login']}
          items={items}
          onClick={menuClick}
        />
      </Header>
      <Content style={{ padding: '0 50px'}} className="site-layout-content">
        <div className="site-layout-content">
            <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Resume Tool ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Home;