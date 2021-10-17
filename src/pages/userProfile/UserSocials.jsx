import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import AuthService from "../../services/authService";
import CvService from "../../services/cvService";

export default function UserSocials({ ...props }) {
  const [socials, setSocials] = useState([]);
  let cvService = new CvService();
  useEffect(() => {
    cvService.getSocialsByUserId(props.userId).then((r) => {
      setSocials(r.data.data);
      console.log(r.data.data);
    });
  }, []);
  
  const [me, setMe] = useState([]);
  let authService = new AuthService();
  useEffect(() => {
    authService.me().then((r) => {
      setMe(r.data.data);
      console.log("me");
      console.log(r);
    });
  }, []);
  return (
    <div>
      <div className="cvTitleFont">Sosyal Medya Hesapları {me != undefined && me.id == props.userId && (<font className="userProfileEditCSS" style={{float:"right"}}><Icon name="add"></Icon>Hesap Ekle</font>)}</div>
      {socials.map((social) => (
        <div className="marginLeft15" key={social.socialId}>
          {social.socialMediaName == "Github" && <Icon name="github" size="large"></Icon>}
          {social.socialMediaName == "Instagram" && <Icon name="instagram" size="large"></Icon>}
          {social.socialMediaName == "Twitter" && <Icon name="twitter" size="large"></Icon>}
          <div className="cvSchoolsListClass marginRight5">
            <font className="cvBlackFont">{social.socialMediaName} </font>
            <Icon name="long arrow alternate right"></Icon>
            <font className="cvSchoolsFontSchoolName">@{social.socialMediaLink} </font>
          </div>
        </div>
      ))}
    </div>
  );
}
