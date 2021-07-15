import React from "react";
import ReactDOM from "react-dom";
import Login from "./Pages/login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/home";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>,
            <Route exact path="/Pages/home" component={Home}/>,
        </Switch>
    </Router>,

  document.getElementById('root')
);
