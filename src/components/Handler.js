import React, { Component } from 'react';
import ReactDOM, { render, findDOMNode } from 'react-dom';

import Cycle from './Cycle';
class Handler extends Component {
    constructor() {
        super();
        this.state = {
            val: 0,
            destroyed: false
        };
    }

    update(event) {
        this.setState({
            val: this.state.val + 1
        });
    }
    toDestroy(event) {
        this.setState({
            destroyed: true
        });
    }

    remove() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    }

    render() {
        if(this.state.destroyed) {
            return null;
        }
        return (
            <div>
                <Cycle val={this.state.val} />
                <button onClick={this.update.bind(this)}>{this.state.val}</button>
                <button onClick={this.toDestroy.bind(this)}>组件移除</button>
                <button onClick={this.remove.bind(this)}>组件unmount</button>
            </div>
        );
    }
}



export default Handler;
