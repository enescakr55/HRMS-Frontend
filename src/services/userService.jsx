import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class UserService {
    getUserById(userId){
        return axios.get(EnvironmentUrl.siteAddress()+"users/getbyid?id="+userId);
    }
}