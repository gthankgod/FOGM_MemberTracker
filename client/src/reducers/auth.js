import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
    loading: true,
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null
};


const auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return { ...state, ...payload, isAuthenticated: true, loading: false };
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return { ...state, token: null, isAuthenticated: false, loading: false };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthenticated: true };
        case LOGIN_FAIL:
            return { ...state, loading: false, isAuthenticated: false };
        case LOGOUT:
            return { ...state, isAuthenticated: false }
        default:
            return state;
    }
}

export default auth;