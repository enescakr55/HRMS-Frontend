import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Icon, Popup } from "semantic-ui-react";
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
  function deleteSocial(social){
    cvService.deleteMySocial(social.socialId).then(result=>{
      result.data.success == true ? toast.success("Başarıyla Silindi") : toast.error("Silinemedi");
    })
  }
  return (
    <div>
      <div className="cvTitleFont">
        Sosyal Medya Hesapları{" "}
        {me != undefined && me.id == props.userId && (
          <Link to={"/user-profile-edit/social"}><font className="userProfileEditCSS" style={{ float: "right" }}>
            <Icon name="add"></Icon>Hesap Ekle
          </font></Link>
        )}
      </div>
      {socials.map((social) => (
        <div className="marginLeft15" key={social.socialId}>
          {social.socialMediaName == "Github" && (
            <Icon name="github" size="large"></Icon>
          )}
          {social.socialMediaName == "Instagram" && (
            <Icon name="instagram" size="large"></Icon>
          )}
          {social.socialMediaName == "Twitter" && (
            <Icon name="twitter" size="large"></Icon>
          )}
          {social.socialMediaName == "LinkedIn" && (<Icon name="linkedin" size="large"></Icon>)}
          <div className="cvSchoolsListClass marginRight5">
            <font className="cvBlackFont">{social.socialMediaName} </font>
            <Icon name="long arrow alternate right"></Icon>
            <font className="cvSchoolsFontSchoolName">
              @{social.socialMediaLink}{" "}
            </font>
          </div>
          {me != undefined && me.id == props.userId && <Popup content="Sil" position="right center" trigger={ <Icon onClick={()=>deleteSocial(social)} name="trash" className="userProfileMiniCSS"></Icon>}></Popup>}
        </div>
      ))}
    </div>
  );
}
