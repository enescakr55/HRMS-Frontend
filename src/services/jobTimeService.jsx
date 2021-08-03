import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class JobTimeService{
    getAll(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobtime/getall");
    }
}