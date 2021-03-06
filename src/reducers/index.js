import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';
import directoryReducer from "./dirReducer";

const allReducers = combineReducers({
    routing: routerReducer,
    directoryData : directoryReducer
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
};

export default rootReducer;
