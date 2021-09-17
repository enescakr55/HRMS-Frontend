import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, Grid, Icon } from "semantic-ui-react";
import AuthService from "../services/authService";
import LocalStorageService from "../services/localStorageService";
import { loginAccount, signOutAccount, updateLoginValue } from "../store/actions/accountActions";

export default function Logged() {
  let localStorageService = new LocalStorageService();
  let userType = localStorageService.getItem("type");
  let authService = new AuthService();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    authService.getInfo().then((p) => {
      console.log(p)
      if (p.data.data.companyName != null) {
        setName(p.data.data.companyName);
        update_login();
      } else {
        let fullname = p.data.data.firstName + " " + p.data.data.lastName;
        setName(fullname);
        update_login();
      }
    },()=>{
      logout(0);
    });
  }, []);
  function logout(showMessage=1){
    dispatch(signOutAccount());
    if(showMessage === 1){
      toast.info("Hesaptan çıkış yapıldı");
    }else{
      toast.info("Oturum zaman aşımına uğradı. Lütfen tekrar giriş yapın.");
    }

    
  }
  function update_login(){
    dispatch(updateLoginValue());
    
  }
  return (
    <div>
      <Grid columns="1" divided>
        <Grid.Column>
        <Dropdown icon={(userType !== "employer" && "user") || (userType === "employer" && "building")} text={name} floating labeled button className="icon">
            <Dropdown.Menu className="left">
            {userType !== "employer" && <Dropdown.Item onClick={()=>toast.info("Çok yakında eklenecek")}>
                <Icon name="edit" />
                <span className="text">Profili Düzenle</span>
              </Dropdown.Item>}
              {userType === "employer" && <Dropdown.Item onClick={()=>toast.info("Çok yakında eklenecek")}>
                <Icon name="edit" />
                <span className="text">Şirketi Düzenle</span>
              </Dropdown.Item>}
              {userType === "employer" && <Dropdown.Item onClick={()=>toast.info("Çok yakında eklenecek")}>
                <Icon name="plus square" />
                <span className="text">Yeni İlan Oluştur</span>
              </Dropdown.Item>}
              <Dropdown.Item as={NavLink} to="/favorite-job-adverts"><Icon name="star"></Icon> Favoriler</Dropdown.Item>
              <Dropdown.Item onClick={()=>logout()}>
                <Icon name="x" />
                <span className="text">Çıkış Yap</span>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
      </Grid>
    </div>
  );
}
