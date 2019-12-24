import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';


export const login = (body) => async dispatch => {
    const option = {
        "Content-Type": "application/json",
        Accept: "*/*",
        method: "POST",
        body
    };
    console.log(option);
    try {
        const res = await fetch('/auth/login', option);
        const data = await res.json();
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
    }
    catch (ex) {
        dispatch({
            type: LOGIN_FAIL
        });
    }

}