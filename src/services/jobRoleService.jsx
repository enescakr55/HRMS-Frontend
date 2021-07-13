import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class JobRoleService{
    addRole(role){
        return axios.post(EnvironmentUrl.siteAddress()+"roles/add",role);
    }
    getRoles(){
        return axios.get(EnvironmentUrl.siteAddress()+"roles/getall");
    }
    deleteRole(id){
        return axios.get(EnvironmentUrl.siteAddress()+"roles/delete?roleid="+id);
    }
}