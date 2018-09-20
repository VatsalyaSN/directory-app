import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import {browserHistory} from "react-router";
// import {syncHistoryWithStore} from 'react-router-redux';
import logger from 'redux-logger';

const initialState = {};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const history = syncHistoryWithStore(browserHistory, store);

export default store;