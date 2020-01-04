import { combineReducers } from 'redux';
import member from './members';
import auth from "./auth";
import alerts from './alerts';

const rootReducers = combineReducers({
    member,
    auth,
    alerts
});

export default rootReducers;