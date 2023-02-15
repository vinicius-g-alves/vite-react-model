import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, MenuProps } from "antd";
import Sider from "./Sider/Sider";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import { Breadcrumb, Layout, Menu, theme } from "antd";

// const { Header, Content, Footer, Sider } = Layout;

interface IMainLayout {
  children: React.ReactNode;
  menuKey: string;
}

const { Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const MainLayout = ({ children, menuKey }: IMainLayout) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        menuKey={menuKey}
      />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
