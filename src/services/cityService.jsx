import axios from "axios";
import EnvironmentUrl from './environmentUrls';
export default class CityService{
    getAll(){
        return axios.get(EnvironmentUrl.siteAddress()+"cities/getall");
    }
}