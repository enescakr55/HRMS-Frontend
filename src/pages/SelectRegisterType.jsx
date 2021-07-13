import React from "react";
import { Card, Image, Grid,Icon } from "semantic-ui-react";

export default function SelectRegisterType() {
  const iconPath = process.env.PUBLIC_URL + "/assets/";
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <Card>
              <Image src={`${iconPath}employer.webp`} wrapped ui={false} />
              <Card.Content>
                <Card.Header textAlign="center">
                  <h2>İşveren</h2>
                </Card.Header>
              </Card.Content>
              <Card.Content textAlign="center">
                <h4>İşveren olarak üye ol</h4>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
            <Image src={`${iconPath}employer.webp`} wrapped ui={false} />
              <Card.Content>
                <Card.Header textAlign="center">
                  <h2>İş Arayan</h2>
                </Card.Header>
              </Card.Content>
              <Card.Content textAlign="center">
                <h4>İş Arayan Olarak Üye Ol</h4>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
              <Image src={`${iconPath}employer.webp`} wrapped ui={false} />
              <Card.Content>
                <Card.Header textAlign="center">
                  <h2>Çalışan</h2>
                </Card.Header>
              </Card.Content>
              <Card.Content textAlign="center">
                <h4>Çalışan Olarak Üye Ol</h4>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
