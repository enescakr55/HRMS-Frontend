import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  GridColumn,
  GridRow,
  Segment,
  Icon,
  Header,
  Button,
  Divider,
  Search,
  Image,
} from "semantic-ui-react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Image
            style={{ display: "inline-block" }}
            src="/assets/bigLogo.png"
            size="tiny"
          ></Image>
          <font className="fontMonospace" style={{fontSize:"16px"}}>
            İş Kaşifi
          </font>
        </div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="building outline" />
                  Şirket Olarak Üye Ol
                </Header>

                <Button primary as={NavLink} to="/employer-sign-up">
                  <Icon name="building outline"></Icon> Üye Ol
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="user" />
                  İş Arayan Olarak Üye Ol
                </Header>
                <Button primary as={NavLink} to="/jobseeker-sign-up">
                  <Icon name="user"></Icon>Üye Ol
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
