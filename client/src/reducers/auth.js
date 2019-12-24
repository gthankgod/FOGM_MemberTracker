import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
    loading: true,
    loggedIn: false
};


const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loading: false, loggedIn: true };
        case LOGIN_FAIL:
            return { ...state }

        default:
            return state;
    }
}

export default auth;