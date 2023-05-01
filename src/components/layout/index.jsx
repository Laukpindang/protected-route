import React from "react";
import { Layout } from "antd";
import { SideMenu, MainHeader } from "../";
import { useOutlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const outlet = useOutlet();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ backgroundColor: "grey" }}>
        <SideMenu />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "red" }}>
          <MainHeader />
        </Header>
        <Content style={{ padding: "10px" }}>{outlet}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
