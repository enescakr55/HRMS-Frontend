import axios from 'axios'
import EnvironmentUrl from './environmentUrls';
export default class EmployerService {
    getEmployers(){
        return axios.get(EnvironmentUrl.siteAddress()+"employers/getall");
    }
    addEmployer(employer){
        return axios.post(EnvironmentUrl.siteAddress+"employers/add",employer)
    }
    registerEmployer(employerRegister){
        return axios.post(EnvironmentUrl.siteAddress+"employers/registeremployer",employerRegister);
    }
}
