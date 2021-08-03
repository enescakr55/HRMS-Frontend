import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class JobAdvertService {
    async getJobAdverts(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/getall");
    }
    addJobAdvert(jobadvert){
        return axios.post(EnvironmentUrl.siteAddress()+"jobadverts/addwithdto",jobadvert);
    }
}