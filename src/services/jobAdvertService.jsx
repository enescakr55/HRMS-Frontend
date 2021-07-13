import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class JobAdvertService {
    getJobAdverts(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/getall")
    }
}