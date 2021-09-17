import { Formik,Form } from "formik";
import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Link,Redirect,Router,useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  Button,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Divider,
  Icon,
  Search,

} from "semantic-ui-react";

import AuthService from "../services/authService";
import FrmTextInput from "../utilities/customFormControls/FrmTextInput";
import LocalStorageService from "../services/localStorageService";
import { useDispatch } from "react-redux";
import { loginAccount, LOGIN_ACCOUNT } from "../store/actions/accountActions";

export default function SignInPage() {
  const dispatch = useDispatch();
  let history = useHistory();
  let authService = new AuthService();
  let localStorageService = new LocalStorageService();
  let initialValues = {
    emailAddress: "",
    password: "",
  };
  let schema = Yup.object({
    emailAddress: Yup.string().required(
      "Lütfen E-Posta adresini boş bırakmayın"
    ),
    password: Yup.string().required("Lütfen şifrenizi boş bırakmayın"),
  });

  return (
    <div>
        <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical></Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='user' />
            Giriş Yap
          </Header>

          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(value) => {
              let loginInfo = {
                username: value.emailAddress,
                password: value.password,
              };
              //console.log(value);
              //console.log(loginInfo);
              authService.login(loginInfo).then((p)=>{
                let result = p.data;
                console.log(result);
                if(result.success){
                  toast.success("Hesaba giriş yapıldı");
                  const json = JSON.stringify(result.data.expiration);
                  const parsed = JSON.parse(json);
                  const dateMilliseconds = new Date(parsed).getTime();
                  dispatch(loginAccount({token:result.data.token,expiration:dateMilliseconds,userType:result.data.userType}));
                  history.push("/main");
                }
              },(p)=>{
                toast.error("Giriş Başarısız");
              })
            }}
          >
            <Form size="large">

                <label>E-Mail</label>
                <FrmTextInput style={{width:"100%",height:"40px",borderRadius:"10px",outline:"none",border:"1px solid gray"}} name="emailAddress"></FrmTextInput>
                <br />
                <label>Şifre</label>
                <FrmTextInput style={{width:"100%",height:"40px",borderRadius:"10px",outline:"none",border:"1px solid gray"}} type="password" name="password"></FrmTextInput>
                <br />

                <Button type="submit" color="blue" size="medium">
                  Giriş Yap
                </Button>
            </Form>
          </Formik>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='user plus' />
            Üye değil misin ?
          </Header>
          <Button primary as={NavLink} to="/sign-up">Üye Ol</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

    </div>
  );
}
