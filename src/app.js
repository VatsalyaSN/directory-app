import "babel-polyfill";
import css from './styles/style.styl';
import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import store from "./store";

import InboxView from "./views/InboxView";

// import {history} from "./store";
/*
 * The Provider component provides the React store to all its child components so we don't need to pass
 * it explicitly to all the components.
 */

// const initialState = {};

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStoreWithMiddleware(allReducers);

var indexRouteOptions = {component: InboxView};

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={"/"}>
                <IndexRoute {...indexRouteOptions}/>
                <Route path={"inbox"} component={InboxView}/>
            </Route>
        </Router>
    </Provider>, document.getElementById("root"));
