import { GET_MEMBERS } from '../actions/types'

const initialState = {
    members: null,
    member: null,
    loading: true
};


const members = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: [...payload]
            };
        default:
            return state;
    }
}

export default members;