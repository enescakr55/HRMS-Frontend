import axios from "axios";
import EnvironmentUrl from "./environmentUrls";
export default class CvService {
    getDescriptionByUserId(userid){
        return axios.get(EnvironmentUrl.siteAddress()+"descriptions/getbyuserid?userid="+userid);
    }
    getDescriptions(){
        return axios.get(EnvironmentUrl.siteAddress()+"descriptions/getall");
    }
    updateMyDescription(description){
        return axios.post(EnvironmentUrl.siteAddress()+"descriptions/updatemydescription",description)
    }
    getSchoolsByUserId(userid){
        return axios.get(EnvironmentUrl.siteAddress()+"schools/getbyuserid?userid="+userid);
    }
    addOrUpdateMySchool(school){
        return axios.post(EnvironmentUrl.siteAddress()+"schools/addmyschool",school);
    }
    deleteMySchool(schoolId){
        return axios.get(EnvironmentUrl.siteAddress()+"schools/deletemyschool?schoolid="+schoolId);
    }
    getExperiencesByUserId(userid){
        return axios.get(EnvironmentUrl.siteAddress()+"experiences/getbyuserid?userid="+userid);
    }
    deleteMyExperience(experienceId){
        return axios.get(EnvironmentUrl.siteAddress()+"experiences/deletemyexperience?experienceid="+experienceId);
    }
    addMyExperience(experience){
        return axios.post(EnvironmentUrl.siteAddress()+"experiences/addmyexperience",experience);
    }
    getLanguagesByUserId(userid){
        return axios.get(EnvironmentUrl.siteAddress()+"languages/getbyuserid?userid="+userid);
    }
    addMyLanguage(language){
        return axios.post(EnvironmentUrl.siteAddress()+"languages/addmylanguage",language);
    }
    deleteMyLanguage(languageid){
        return axios.get(EnvironmentUrl.siteAddress()+"languages/deletemylanguage?languageid="+languageid);
    }
    getSocialsByUserId(userid){
        return axios.get(EnvironmentUrl.siteAddress()+"socials/getbyuserid?userid="+userid);
    }
    addMySocial(social){
        return axios.post(EnvironmentUrl.siteAddress()+"socials/addmysocial",social);
    }
    deleteMySocial(socialId){
        return axios.get(EnvironmentUrl.siteAddress()+"socials/deletemysocial?socialid="+socialId);
    }
}