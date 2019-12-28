import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
    loading: true,
    isAuthenticated: false
};


const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthenticated: true };
        case LOGIN_FAIL:
            return { ...state, loading: false, isAuthenticated: false }

        default:
            return state;
    }
}

export default auth;