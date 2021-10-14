import axios from "axios";
import EnvironmentUrl from "./environmentUrls";
import LocalStorageService from "./localStorageService";

export default class AuthService{
    login(loginInfo){
        return axios.post(EnvironmentUrl.siteAddress()+"auth/login",loginInfo);
    }
    renewtoken(){
        return axios.get(EnvironmentUrl.siteAddress()+"auth/renewtoken");
    }
    isExpired(){
        let localStorageService = new LocalStorageService();
    }
    getInfo(){
        let localStorageService = new LocalStorageService();
        let userType = localStorageService.getItem("type");
        if(userType == "employer"){
            return axios.get(EnvironmentUrl.siteAddress()+"users/getemployerinfo");
        }else{
            return axios.get(EnvironmentUrl.siteAddress()+"users/getuserinfo");
        }

    }
    logout(){
        let localStorageService = new LocalStorageService();
        localStorageService.addItem("token","");
        localStorageService.addItem("expiration",0);
    }
    me(){
        return axios.get(EnvironmentUrl.siteAddress()+"auth/me");
    }

}