import { combineReducers } from 'redux';
import members from './members';
import auth from "./auth";

const rootReducers = combineReducers({
    members,
    auth
});

export default rootReducers;