import React from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SnippetsOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="h-full">
        <Sider
          className="side"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              个人基本信息
            </Menu.Item>
            <Menu.Item key="3" icon={<RadarChartOutlined />}>
              个人技能
            </Menu.Item>
            <Menu.Item key="2" icon={<SnippetsOutlined />}>
              备忘录
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Avatar
              size={64}
              style={{
                backgroundColor: "#1890ff",
              }}
              icon={<UserOutlined />}
            />
            <span style={{ fontSize: "20px", marginLeft: "20px" }}>
              设计能力有限
            </span>
            <p style={{ marginTop: "60px" }}>后续内容，敬请期待。。。。。。</p>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
