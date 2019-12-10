import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { MainContainer } from "../routes";
import { Link, NavLink } from "react-router-dom";

import "../assets/style/index.scss";
import "../../node_modules/antd/dist/antd.css";

const { Header, Sider, Footer } = Layout;

export class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to="/" className="logo">
            Filmz
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="home" theme="twoTone" />
              <span>Main</span>
              <NavLink exact to="/">
                Main
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="profile" theme="twoTone" />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="calendar" theme="twoTone" />
              <span>Schedule</span>
              <NavLink exact to="/schedule">
                Schedule
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <h2 className="header-logo">Filmz.Inc</h2>
          </Header>
          <MainContainer />
          <Footer>Made by Daniel in 2020</Footer>
        </Layout>
      </Layout>
    );
  }
}
