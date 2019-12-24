const initialState = {};


const members = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEMBERS':
            return state;

        default:
            return state;
    }
}

export default members;