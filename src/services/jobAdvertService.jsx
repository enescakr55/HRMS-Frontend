import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class JobAdvertService {
    async getJobAdverts(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/getisactive");
    }
    addJobAdvert(jobadvert){
        return axios.post(EnvironmentUrl.siteAddress()+"jobadverts/addwithdto",jobadvert);
    }
    addJobAdvertByEmployer(jobadvert){
        return axios.post(EnvironmentUrl.siteAddress()+"jobadverts/addjobadvertbyemployer",jobadvert);
    }
    getIfNotActive(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/getisnotactive");
    }
    jobAdvertApprove(jobadvert){
        return axios.post(EnvironmentUrl.siteAddress()+"jobadverts/jobadvertapprove",jobadvert);
    }
    jobAdvertRemove(jobadvert){

    }
    getFavorites(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/getfavorites");
    }
    addFavorite(id){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/addfavorites?advertid="+id);
    }
    removeFavorite(id){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/removefavorites?advertid="+id);
    }
    getMyJobAdverts(){
        return axios.get(EnvironmentUrl.siteAddress()+"jobadverts/getmyjobadverts");
    }
    getJobApplyCount(jobAdvert){
        return axios.post(EnvironmentUrl.siteAddress()+"jobapplies/getjobapplycountbyjobadvert",jobAdvert);
    }
    
}