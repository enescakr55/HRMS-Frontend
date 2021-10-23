import axios from "axios";
import EnvironmentUrl from "./environmentUrls";

export default class MailService{
    sendUserVerificationMail(userMail){
        return axios.get(EnvironmentUrl.siteAddress()+"mail/send?email="+userMail);
    }
}