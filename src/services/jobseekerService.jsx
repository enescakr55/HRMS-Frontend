import axios from "axios"
import EnvironmentUrl from "./environmentUrls";
export default class JobseekerService{
    getJobseekers(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobseekers/getall");
    }
    registerJobseeker(jobseeker){
        return axios.post(EnvironmentUrl.siteAddress()+"jobseekers/registerjobseeker",jobseeker);
    }
    getJobseekerByUserId(userId){
        return axios.get(EnvironmentUrl.siteAddress()+"jobseekers/getjobseekerbyuserid?userid="+userId);
    }
    getAllJobseekerDetails(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobseekers/getalljobseekerdetails");
    }
    getJobseekerDetailsIfJobapply(jobAdvertId){
        return axios.get(EnvironmentUrl.siteAddress()+"jobseekers/getjobseekerdetailsifjobapply?jobadvertid="+jobAdvertId)
    }
}
