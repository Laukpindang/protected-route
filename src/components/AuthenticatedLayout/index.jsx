import React, { useEffect } from 'react';
import { useOutlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { SideMenu, MainHeader } from '..';
import { Cookie } from '../../helper';

const { Sider, Header, Content } = Layout;

const AuthenticatedLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(() => {
    const user = Cookie.getCookie('user');

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

export default AuthenticatedLayout;
