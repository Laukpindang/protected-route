import React, { useEffect } from 'react';
import { useOutlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { SideMenu, MainHeader } from '../';

const { Sider, Header, Content } = Layout;

const AuthLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user?.token) {
      navigate('/not-auth');
    }
  }, [navigate]);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider style={{ backgroundColor: 'grey' }}>
        <SideMenu />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'red' }}>
          <MainHeader />
        </Header>
        <Content style={{ padding: '10px' }}>{outlet}</Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
