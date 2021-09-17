import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
export default function NotLogged() {
  return (
    <div>
      <Button.Group>
        <Button as={NavLink} to="/sign-in">Giriş Yap</Button>
        <Button.Or text=""></Button.Or>
        <Button as={NavLink} to="/sign-up" positive>Üye Ol</Button>
      </Button.Group>
    </div>
  );
}
