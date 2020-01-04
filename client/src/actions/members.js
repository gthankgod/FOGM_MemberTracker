import { GET_MEMBERS } from './types';

export const getMembers = () => async dispatch => {
    const res = await fetch('/members');
    const member = await res.json();

    dispatch({
        type: GET_MEMBERS,
        payload: member
    });
}