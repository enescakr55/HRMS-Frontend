export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT"
export const SIGN_OUT = "SIGN_OUT"
export const UPDATE_LOGIN_VALUE ="UPDATE_LOGIN_VALUE"
export function loginAccount(accountInfo){
    return {
        type : LOGIN_ACCOUNT, 
        payload : accountInfo
    }
}
export function signOutAccount(){
    return {
        type : SIGN_OUT, 
        payload : null
    }
}
export function updateLoginValue(){
    return {
        type : UPDATE_LOGIN_VALUE,
        payload : null
    }

}