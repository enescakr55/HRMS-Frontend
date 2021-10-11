import React, { useEffect, useState } from "react";
import { Message,Icon } from "semantic-ui-react";
import AuthService from "../services/authService";
import MyJobAdverts from "./MyJobAdverts";
import UploadProfileImage from "./UploadProfileImage";

export default function BusinessProfileEdit() {
  const [name, setName] = useState("");
  useEffect(() => {
    let authService = new AuthService();
    authService.getInfo().then((p) => {
      console.log(p);
      if (p.data.data.companyName != null) {
        setName(p.data.data.companyName);
      }
    });
  }, []);
  return (
    <div>
      { /*<Message warning  ><Icon name="warning circle" size="large"/>Son güncellemeniz yetkili onayı bekliyor. Yetkili tarafından onaylandıktan sonra değişiklikler aktif olacaktır.</Message> */}
      <p
        style={{
          fontFamily: "sans-serif",
          borderBottom: "2px solid #2185d0",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#2185d0",
        }}
      >
        Şirket Bilgileri
      </p>
      <UploadProfileImage></UploadProfileImage>
      <div style={{ display: "inline-block" }}>
        <font className="titleFont">Şirket Adı:</font>
        <font className="normalFont"> {name} </font>
        <br />
      </div>
      <div style={{ textAlign: "left" }}>
        <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
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
