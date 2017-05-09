import {combineReducers} from "redux";
import accessToken from "./accessToken";
import transactions from "./transactions";

const todoApp = combineReducers({
    accessToken,
    transactions
});

export default todoApp