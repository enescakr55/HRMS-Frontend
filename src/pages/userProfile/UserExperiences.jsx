import React, { useEffect, useState } from "react";
import CvService from "../../services/cvService";
import { Icon, Popup } from "semantic-ui-react";
import JobRoleService from "../../services/jobRoleService";
import AuthService from "../../services/authService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function UserExperiences({ ...props }) {
  let cvService = new CvService();
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    cvService.getExperiencesByUserId(props.userId).then((r) => {
      setExperiences(r.data.data);
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
  function deleteExperience(experience){
    cvService.deleteMyExperience(experience.experienceId).then((result)=>{
      result.data.success ? toast.success("Başarıyla silindi") : toast.error("Silme işlemi başarısız oldu");
    })
  }
  return (
    <div>
      <div className="cvTitleFont">Deneyimler {me != undefined && me.id == props.userId && (<Link to="/user-profile-edit/experience"><font className="userProfileEditCSS" style={{float:"right"}}><Icon name="add"></Icon> Deneyim Ekle</font></Link>)}</div>
      {experiences.map((r) => (
        <div className="marginLeft15" key={r.experienceId}>
          <Icon name="dot circle"></Icon>
          <div className="cvSchoolsListClass marginRight5">
            <font className="cvBlackFont"> </font>
            <font className="cvSchoolsFontSchoolName">{r.companyName} </font>
          </div>
          <Icon></Icon>
          <div className="marginLeft15" style={{ display: "inline-block" }}>
            <div className="cvSchoolsListClass">
              <font className="userExperiencesJobRole">{r.role.roleName} </font>
            </div>
          </div>
          <div className="marginLeft15" style={{ display: "inline-block",position:"absolute",right:"15px" }}>
            <div className="cvSchoolsListClass">
              <font className="userExperiencesJobRole"><Icon color="black" name="calendar check"></Icon> <font className="userExperiencesDateFont">{r.startDate}  {r.endDate != null ? <font><Icon color="black" name="calendar minus"></Icon>{r.endDate}</font>  : <font><Icon color="black" name="calendar"></Icon>Devam ediyor</font>} </font></font>
              {me != undefined && me.id == props.userId && <Popup content="Sil" position="right center" trigger={<Icon onClick={()=>deleteExperience(r)} name="trash" className="userProfileMiniCSS"></Icon>}></Popup>}
            </div>
            
          </div>
          
        </div>
      ))}
    </div>
  );
}
