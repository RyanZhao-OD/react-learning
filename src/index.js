
import React, { Component } from 'react';
import ReactDOM, { render, findDOMNode } from 'react-dom';

import './index.css';

import Profile from './components/Profile';
import Range from './components/Range';
import List from './components/List';

const data = {
    "login": "ryanzhao1993",
    "id": 8818578,
    "avatar_url": "https://avatars.githubusercontent.com/u/8818578?v=3"
};



class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'state name',
            aa: 0,
            bb: 30,
            cc: 60
        };
        this.update2 = this.update.bind(this);
    }

    update(e) {
        console.log(findDOMNode(this.refs.range1).value);
        this.setState({
            name: e.target.value,
            aa: findDOMNode(this.refs.range1).value,
            bb: findDOMNode(this.refs.range2).value,
            cc: findDOMNode(this.refs.range3).value
        });
    }

    render() {
        const name = 'ryan';
        const styles = {
            fontSize: '20px',
            color: 'green',
            backgroundColor: 'yellow'
        };

        // return React.createElement('h1', null, 'react demo');
        return (
            <div className="container">

                这是div
                <h1 style={styles}>react2 {name} 这是h1
                {/*
                    这是jsx注释
                */}
                    <label htmlFor="name">aa</label>
                </h1>
                <Profile name={data.name} id={data.id} url={data.avatar_url} />





                {this.state.name}
                <br />
                <input type="text" onChange={this.update.bind(this)} />
                <br />
                <input type="text" onChange={this.update2} />
                <Range ref="range1" update={this.update.bind(this)} />{this.state.aa}
                <Range ref="range2" update={this.update.bind(this)} />{this.state.bb}
                <Range ref="range3" update={this.update.bind(this)} />{this.state.cc}

                <List>
                    <a href="https://github.com/ryanzhao1993">github</a>
                    <a href="https://www.baidu.com">百度</a>
                </List>
            </div>

        );
    }
}

class Count extends Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
    }

    update(event) {
        this.setState({
            val: this.state.val + 1
        });
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    render() {
        console.log('render');
        return (
            <button onClick={this.update.bind(this)}>{this.state.val}</button>
        );
    }
}

// 无状态的组件
// const App = () => <h1> react test </h1>;

// render(<App />, document.getElementById('app'));
render(<Count />, document.getElementById('app'));

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
