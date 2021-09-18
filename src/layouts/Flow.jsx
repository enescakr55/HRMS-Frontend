import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon, Popup } from "semantic-ui-react";


export default class Flow extends Component {
  state = { activeItem: "/" };
  changeActiveItem = (e, { name }) => this.setState({ activeItem: name });
  flowItemClick = this.changeActiveItem;
  render() {
    const { activeItem } = this.state;
    console.log({ activeItem });
    return (
      <Menu compact vertical icon inverted color="blue" borderless>
        <Popup
          trigger={
            <Menu.Item
              name="main"
              as={NavLink}
              to="/main"
              active={activeItem === "/main"}
              onClick={this.flowItemClick}
            >
              <Icon size="big" name="home"></Icon>
            </Menu.Item>
          }
          content="Anasayfa"
          position="right center"
        />

        <Popup
          trigger={
            <Menu.Item
              name="employers"
              as={NavLink}
              to="/employers"
              active={activeItem === "/employers"}
              onClick={this.flowItemClick}
            >
              <Icon name="building" size="big"></Icon>
            </Menu.Item>
          }
          content="Şirketler"
          position="right center"
        />
        <Popup
          trigger={
            <Menu.Item
              name="jobseekers"
              as={NavLink}
              to="/jobseekers"
              active={activeItem === "/jobseekers"}
              onClick={this.flowItemClick}
            >
              <Icon name="users" size="big"></Icon>
            </Menu.Item>
          }
          content="İş Arayanlar"
          position="right center"
        />

        <Popup
          trigger={
            <Menu.Item
              name="jobs"
              as={NavLink}
              to="/jobs"
              active={activeItem === "/jobs"}
              onClick={this.flowItemClick}
            >
              <Icon name="list alternate outline" size="big"></Icon>
            </Menu.Item>
          }
          content="İş İlanları"
          position="right center"
        />

        <Popup
          trigger={
            <Menu.Item
              name="jobrolemanagement"
              as={NavLink}
              to="/jobrolemanagement"
              active={activeItem === "/jobrolemanagement"}
              onClick={this.flowItemClick}
            >
              <Icon name="angle double right" size="big"></Icon>
            </Menu.Item>
          }
          content="Yönetim Menüsü"
          position="right center"
        />
      </Menu>
    );
  }
}
