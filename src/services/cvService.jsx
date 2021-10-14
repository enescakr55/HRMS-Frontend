import axios from "axios";
import EnvironmentUrl from "./environmentUrls";
export default class CvService {
    getDescriptionByUserId(userid){
        return axios.get(EnvironmentUrl.siteAddress()+"descriptions/getbyuserid?userid="+userid);
    }
    getDescriptions(){
        return axios.get(EnvironmentUrl.siteAddress()+"descriptions/getall");
    }
}