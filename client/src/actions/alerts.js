import { SET_ALERT, REMOVE_ALERT } from './types';

const setAlert = (msg, msgtype = 'success', time = 3000) => dispatch => {
    let id = Math.random();
    dispatch({
        type: SET_ALERT,
        payload: { id, msg, msgtype }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), time);
}

export default setAlert;