import {SET_ACCESS_TOKEN} from "../actions/index";

const accessToken = (state = '', action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return action.token;
        default:
            return state;
    }
};

export default accessToken