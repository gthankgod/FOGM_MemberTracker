import { combineReducers } from 'redux';
import members from './members';
import auth from "./auth";
import alerts from './alerts';

const rootReducers = combineReducers({
    members,
    auth,
    alerts
});

export default rootReducers;