import "babel-polyfill";
import css from './styles/style.styl';
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import store from "./store";

import InboxView from "./views/InboxView";

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
