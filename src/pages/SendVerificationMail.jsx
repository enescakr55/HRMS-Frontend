import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Dimmer, Icon, Image, Input, Loader } from "semantic-ui-react";
import MailService from "../services/mailService";

export default function SendVerificationMail() {
    const [emailAddress, setEmailAddress] = useState("");
    const [disabled, setDisabled] = useState(false);
  let mailService = new MailService();
  function updateMailAddress(event){
    setEmailAddress(event.target.value);
  }
  function sendMail(btn){
      setDisabled(true);
      mailService.sendUserVerificationMail(emailAddress).then(result=>{
          console.log(result);
          result.data.success ? toast.success(result.data.message) : toast.error(result.data.message);
          setDisabled(false);
      },error=>{
          toast.error("Bir hata oluştu");
          setDisabled(false);
      })
  }
  return (
    <div style={{ height: "100%" }}>
      <div style={{ textAlign: "center", height: "100%" }}>
        <Image
          style={{ display: "inline-block" }}
          src="/assets/bigLogo.png"
          size="small"
        ></Image>
        <br />
        <br />
        <div>
          <font className="fontMonospace" style={{ fontSize: "30px" }}>
            İş Kaşifi
          </font>
        </div>
        <div>
          <font className="fontMonospace" style={{ fontSize: "15px" }}>
            E-Posta Doğrulama
          </font>
        </div>
        <br />
        <Input
          icon="mail"
          iconPosition="left"
          placeholder="E Posta Adresiniz"
          type="email"
          focus
            value={emailAddress}
            onChange={updateMailAddress}
        /><br/>
        {disabled == false && <Button disabled={disabled} onClick={()=>sendMail(this)} style={{marginTop:"5px"}} animated="vertical">
           <Button.Content visible><Icon name="angle right"></Icon>Gönder</Button.Content>
          <Button.Content hidden>
            <Icon name="send"></Icon>
          </Button.Content> 
        </Button> }
        {disabled == true && <Button style={{marginTop:"5px"}} loading>Loading</Button> }
      </div>
    </div>
  );
}
