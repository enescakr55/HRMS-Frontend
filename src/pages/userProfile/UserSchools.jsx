import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Icon, Popup } from "semantic-ui-react";
import AuthService from "../../services/authService";
import CvService from "../../services/cvService";

export default function UserSchools({ ...props }) {
  const [schools, setSchools] = useState([]);
  let cvService = new CvService();
  useEffect(() => {
    cvService.getSchoolsByUserId(props.userId).then((r) => {
      setSchools(r.data.data);
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
  function deleteSchool(school){
    cvService.deleteMySchool(school.schoolId).then((result)=>{
      console.log(result);
      result.data.success == true ? toast.success("Başarıyla Silindi") : toast.error("Bir hata ile karşılaştık");
    })
  }
  return (
    <div>
      <div className="cvTitleFont">Eğitim Bilgileri {me != undefined && me.id == props.userId && (<Link to="/user-profile-edit/school"><font className="userProfileEditCSS" style={{float:"right"}}><Icon name="add"></Icon>Okul Ekle</font></Link>)}</div>
      {schools.map((r) => (
        <div className="marginLeft15" key={r.schoolId}>
          <Icon name="dot circle"></Icon>
          <div className="cvSchoolsListClass marginRight5">
            <font className="cvBlackFont"> </font>
            <font className="cvSchoolsFontSchoolName">{r.schoolName} </font>
          </div>
          {r.departmentName != null && <Icon name="angle double right"></Icon>}
          <div className="cvSchoolsListClass marginRight5">
            <font className="cvBlackFont"> </font>
            <font className="cvSchoolsFontDepartment">{r.departmentName}</font>
          </div>
          <div style={{display:"inline-block",verticalAlign:"top",position:"absolute",right:"15px"}}>
            <div className="cvSchoolsListClass marginRight5">
              <font className="cvBlackFont"> </font>
              <Icon name="book"></Icon>
              <font className="cvSchoolsFontDate">{r.startYear}</font>
            </div>
            <font> </font>
            <div className="cvSchoolsListClass marginRight5">
              <font className="cvBlackFont"></font>
              <Icon name="graduation cap"></Icon>
              {r.graduationYear != null ? (<font className="cvSchoolsFontDate">{r.graduationYear}</font>) : <font className="cvSchoolsFontDate">Devam Ediyor</font>}
            </div>
            <font> </font>
            {me != undefined && me.id == props.userId && <Popup content="Sil" position="right center" trigger={<Icon onClick={()=>deleteSchool(r)} name="trash" className="userProfileMiniCSS"></Icon>}></Popup>}
          </div>
        </div>
      ))}
      {/**/}
    </div>
  );
}
