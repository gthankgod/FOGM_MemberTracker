import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [
                ...state,
                { id: payload.id, msg: payload.msg, msgtype: payload.msgtype }
            ];
        case REMOVE_ALERT:
            return state.filter(alert => payload.id === alert.id);
        default:
            return state;
    }
}