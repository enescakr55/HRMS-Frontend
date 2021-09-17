import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Menu, Icon, Popup } from "semantic-ui-react";

export default class AdminFlow extends Component {
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
              name="jobrolemanagement"
              as={NavLink}
              to="/jobrolemanagement"
              active={activeItem === "/jobrolemanagement"}
              onClick={this.flowItemClick}
            >
              <Icon name="edit" size="big"></Icon>
            </Menu.Item>
          }
          content="Çalışma Pozisyonu Ekle"
          position="right center"
        />
        <Popup
          trigger={
            <Menu.Item
              name="jobadvertadd"
              as={NavLink}
              to="/jobadvertadd"
              active={activeItem === "/jobadvertadd"}
              onClick={this.flowItemClick}
            >
              <Icon name="users" size="big"></Icon>
            </Menu.Item>
          }
          content="İş İlanı Ekle"
          position="right center"
        />
                <Popup
          trigger={
            <Menu.Item
              name="jobadvertapprove"
              as={NavLink}
              to="/jobadvertapprove"
              active={activeItem === "/jobadvertapprove"}
              onClick={this.flowItemClick}
            >
              <Icon name="angle right" size="big"></Icon>
            </Menu.Item>
          }
          content="Onay Bekleyen İlanlar"
          position="right center"
        />
      </Menu>
    );
  }
}
