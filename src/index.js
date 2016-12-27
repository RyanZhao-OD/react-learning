import React, { Component } from 'react';
import ReactDOM, { render, findDOMNode } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect, browserHistory } from 'react-router';

import './index.css';

import App from './components/App';
// import Profile from './components/Profile';
// import Range from './components/Range';
// import List from './components/List';
import Handler from './components/Handler';
import RouterApp from './routers/RouterApp';
import Contact from './routers/Contact';
import About from './routers/About';
import Home from './routers/Home';

// <Router history={hashHistory}>
const router = (
    <Router history={browserHistory}>
        <Route path="/" components={RouterApp}>
            <IndexRoute components={Home} />
            <Route path="contact" components={Contact} />
            <Route path="about/:message/:more" components={About} />
            <Redirect from="about" to="about/react/router" />
            <Redirect from="xxx" to="contact" />
        </Route>
    </Router>
);


class Count extends Component {
    render() {
        return <Handler />;
    }
}

// 无状态的组件
// const App = () => <h1> react test </h1>;

// render(<App />, document.getElementById('app'));
// render(<Count />, document.getElementById('app'));
render(router, document.getElementById('app'));

//es5写法
/*
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function(){
        return <h1>react es5</h1>;
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
*/
