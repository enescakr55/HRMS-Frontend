import axios from "axios"
import EnvironmentUrl from "./environmentUrls"
export default class JobApplyService {
    applyJob(jobAdvert){
        return axios.post(EnvironmentUrl.siteAddress()+"jobapplies/applyjob",jobAdvert);
    }
}
