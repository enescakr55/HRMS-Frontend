import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class JobTypeService{
    getAll(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobtype/getall");
    }
}