import axios from "axios";
import EnvironmentUrl from "./environmentUrls";
export default class CvService {
    getDescriptionByJobseekerId(){
        
    }
    getDescriptions(){
        return axios.get(EnvironmentUrl.siteAddress()+"descriptions/getall");
    }
}