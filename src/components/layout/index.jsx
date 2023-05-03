import React, { useEffect } from "react";
import { Layout } from "antd";
import { SideMenu, MainHeader } from "../";
import { useOutlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);

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
