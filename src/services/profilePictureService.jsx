import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class ProfilePictureService{
    uploadImage(formdata){
        return axios.post(EnvironmentUrl.siteAddress()+"images/uploadprofilepicture",formdata);
    }
    getProfileImage(){
        return axios.get(EnvironmentUrl.siteAddress()+"images/getmyprofilepicture");
    }
    getProfileImageByUserId(userId){
        return axios.get(EnvironmentUrl.siteAddress()+"images/getprofilepicturebyuserid?userid="+userId);
    }
}