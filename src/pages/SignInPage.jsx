import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
export default function SignInPage() {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <h1 style={{fontFamily:'sans-serif',display:"inline-block",color:"black"}}>HRMS</h1> Hesaba Giriş Yap
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail Adresi' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Şifre'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Giriş Yap
          </Button>
        </Segment>
      </Form>
      <Message>
        Üye değil misin ? <a href="#"><Link to="/sign-up">Üye Ol</Link></a>
      </Message>
    </Grid.Column>
  </Grid>
        </div>
    )
}
