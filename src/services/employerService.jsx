import axios from 'axios'
import EnvironmentUrl from './environmentUrls';
export default class EmployerService {
    getEmployers(){
        return axios.get(EnvironmentUrl.siteAddress()+"employers/getall");
    }
    addEmployer(employer){
        return axios.post(EnvironmentUrl.siteAddress()+"employers/add",employer)
    }
    registerEmployer(employerRegister){
        return axios.post(EnvironmentUrl.siteAddress()+"employers/registeremployer",employerRegister);
    }
    activeAccount(employer){
        return axios.post();
    }
    me(){
        return axios.get(EnvironmentUrl.siteAddress()+"employers/me");
    }
    update(pendingEmployer){
        return axios.post(EnvironmentUrl.siteAddress()+"pendingemployers/update",pendingEmployer);
    }
    isPending(){
        return axios.get(EnvironmentUrl.siteAddress()+"pendingemployers/ispending");
    }
    applyUpdateRequest(pendingEmployerId,isOk){
        return axios.get(EnvironmentUrl.siteAddress()+"pendingemployers/applyupdaterequest?pendingemployerid="+pendingEmployerId+"&isok="+isOk);
    }
    getUpdateRequests(){
        return axios.get(EnvironmentUrl.siteAddress()+"pendingemployers/getall");
    }
}
