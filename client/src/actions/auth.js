import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';


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
        console.log(data);
        if (data.status === 'error') {
            return dispatch({
                type: LOGIN_FAIL
            });
        }
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