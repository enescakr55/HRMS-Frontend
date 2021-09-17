import LocalStorageService from "../../services/localStorageService";
import { LOGIN_ACCOUNT, SIGN_OUT,UPDATE_LOGIN_VALUE } from "../actions/accountActions";
import { accountInfo } from "../initialValues/accountInfo";

const initialState = {
    accountInfo:accountInfo
}
export default function accountReducer(state=initialState,{type,payload}){
    const localStorage = new LocalStorageService();
    switch (type) {
        case LOGIN_ACCOUNT:
            localStorage.addItem("token",payload.token);
            localStorage.addItem("expiration",payload.expiration);
            localStorage.addItem("type",payload.userType);
            let isLogged = {logged:"logged"};
            return {
                ...isLogged
            }
        case SIGN_OUT:
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
            localStorage.removeItem("type");
            return {
                ...initialState
            }
        case UPDATE_LOGIN_VALUE:
            let x = {logged:"logged"};
             return {
                 ...x
             }
        default:
            return{
                ...state
            }
            break;
    }
}