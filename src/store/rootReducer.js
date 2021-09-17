import {combineReducers} from "redux";
import accountReducer from "./reducers/accountReducer";
const rootReducer = combineReducers({
    account :accountReducer
})
export default rootReducer;