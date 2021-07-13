import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";
import NotLogged from "./NotLogged";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item>
            <h2>HRMS</h2>
          </Menu.Item>
          <Menu.Item>
            
            <div className="ui primary buttons">
              <Button as={NavLink} to="main">Anasayfa</Button>
              <Button as={NavLink} to="employers">Şirketler</Button>
              <Button as={NavLink} to="jobseekers">İş Arayanlar</Button>
            </div>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <NotLogged />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
