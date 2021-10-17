import React, { useEffect, useState } from "react";
import CvService from "../../services/cvService";
import { Icon } from "semantic-ui-react";
import AuthService from "../../services/authService";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export default function UserDescription({ ...props }) {
  const [description, setDescription] = useState("");
  let history = useHistory();
  
  let cvService = new CvService();
  
  useEffect(() => {
    cvService.getDescriptionByUserId(props.userId).then((r) => {
      setDescription(r.data.data != undefined ? r.data.data.userdescription : "");
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
      <div style={{ paddingTop: "20" }}>
        {description != null && (
          <div>
            <div className="cvTitleFont">
              Hakkında
              {me != undefined && me.id == props.userId && (
                <font onClick={()=>history.push("/user-profile-edit/description")} className="userProfileEditCSS">
                  <Icon name="edit"></Icon> Düzenle
                </font>
              )}
            </div>{" "}
            <div className="cvBlackFont marginLeft15">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
}
