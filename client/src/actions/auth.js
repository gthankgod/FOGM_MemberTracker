import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import setAlert from './alerts';


export const login = (body) => async dispatch => {
    const option = {
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*"
        },
        method: "POST",
        body: JSON.stringify(body)
    };
    try {
        const res = await fetch('/auth/login', option);
        const data = await res.json();
        if (data.status === 'error') {
            dispatch(setAlert(data.msg));
            dispatch({ type: LOGIN_FAIL });
            return
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
    }
    catch (err) {
        setAlert('Welcome');
        dispatch({ type: LOGIN_FAIL });
    }

}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
}

export const register = (body) => async dispatch => {
    const option = {
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*"
        },
        method: "POST",
        body: JSON.stringify(body)
    };
    try {
        const res = await fetch('/auth/signup', option);
        const data = await res.json();

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        });
    }
    catch (ex) {
        dispatch({ type: REGISTER_FAIL });
    }
}