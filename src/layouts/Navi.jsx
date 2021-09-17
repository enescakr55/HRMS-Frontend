import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom";
import { Menu, Button, Container,Image, Sticky } from "semantic-ui-react";
import LocalStorageService from "../services/localStorageService";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount } from "../store/actions/accountActions";

export default function Navi() {
  const account = useSelector(state => state.account);
  return (
    <div><Sticky>
      <Menu  style={{backgroundColor:"#086ebb",borderRadius:"0px"}} inverted size="mini" borderless>
        <Container>
        
          <Menu.Item>
            <Link to="/"><Image src="/assets/logo.png" size="mini"></Image></Link><Link to="/"><font className="fontMonospace menuTextSize">&nbsp; İş Kaşifi </font></Link>
          { 1==0 && <div className="ui primary buttons">
              <Button as={NavLink} to="main">Anasayfa</Button>
              <Button as={NavLink} to="employers">Şirketler</Button>
              <Button as={NavLink} to="jobseekers">İş Arayanlar</Button>
            </div> }
          </Menu.Item>
          <Menu.Menu position="right" size="large">
            <Menu.Item>
              {(account.logged != null || localStorage.getItem("expiration") != null) && <Logged/>}
              {account.logged == null && localStorage.getItem("expiration") == undefined && <NotLogged/>}
            </Menu.Item>
          </Menu.Menu>
        
        </Container>
      </Menu>
      </Sticky>
    </div>
  );
}
