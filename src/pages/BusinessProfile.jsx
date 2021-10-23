import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Message,Icon, Button } from "semantic-ui-react";
import AuthService from "../services/authService";
import EmployerService from "../services/employerService";
import MyJobAdverts from "./MyJobAdverts";
import UploadProfileImage from "./UploadProfileImage";

export default function BusinessProfile() {
  const [name, setName] = useState("");
  const [employer,setEmployer] = useState([]);
  const [isPending,setIsPending] = useState([]);
  let employerService = new EmployerService();
  useEffect(() => {
    employerService.me().then(result=>{
      console.log(result.data.data);
      setEmployer(result.data.data);
    })
  }, [])
  useEffect(() => {
    let authService = new AuthService();
   
    authService.getInfo().then((p) => {
      console.log(p);
      if (p.data.data.companyName != null) {
        setName(p.data.data.companyName);
      }
    });
  }, []);
  useEffect(() => {
    employerService.isPending().then(result=>{
      setIsPending(result.data.data);
    })
  }, [])
  return (
    <div>
      
      {isPending == true && <Message warning  ><Icon name="warning circle" size="large"/>Son güncellemeniz yetkili onayı bekliyor. Sistem personeli tarafından onaylandıktan sonra değişiklikler aktif olacaktır.</Message>}
      <p
        style={{
          fontFamily: "sans-serif",
          borderBottom: "2px solid #2185d0",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#2185d0",
        }}
      >
        Şirketiniz
      </p>
      <div style={{width: "100%", background: "#e8e8e8", padding: "10px",borderRadius:"10px",boxShadow:"#d8d8d8 1px 1px 4px 2px",marginBottom:"10px"}}>
      <UploadProfileImage></UploadProfileImage>
      <div
            style={{
              display: "inline-block",
              width: "0px",
              height: "200px",
              verticalAlign: "top",
              marginLeft: "8px",
              marginRight: "8px",
              boxShadow:"0px 0px 3px 2px #868686"
            }}
          ></div>
      {employer != null && <div style={{ display: "inline-block" }}>
        <font style={{fontSize:"20px",fontWeight:"bold",display:"inline-block",marginBottom:"15px"}}>Şirket Bilgileri</font><br/>
        <div style={{display:"inline-block",marginBottom:"10px"}}>
        <font className="employerInfoFontTitle">Şirket Adı:</font>
        <font className="employerInfoFont"> {employer.companyName} </font></div><br/>
        <div style={{display:"inline-block",marginBottom:"10px"}}>
        <font className="employerInfoFontTitle">Website:</font>
        <font className="employerInfoFont"> {employer.website} </font></div><br/>
        <div style={{display:"inline-block",marginBottom:"10px"}}>
        <font className="employerInfoFontTitle">Telefon Numarası:</font>
        <font className="employerInfoFont"> {employer.phoneNumber} </font></div>
        <br/>
        <div style={{textAlign:"center"}}><Button as={NavLink} to="/business-edit-profile" color="google plus" size="tiny">Şirket Bilgilerini Düzenle</Button></div>
      </div>  }
      </div>
      <div style={{ textAlign: "left" }}>
        <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "1px solid #2185d0",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#2185d0",
          }}
        >
          Şirketinize Ait İş İlanları
        </p>
        <MyJobAdverts></MyJobAdverts>
        
      </div>
      
    
      </div>
  );
}
