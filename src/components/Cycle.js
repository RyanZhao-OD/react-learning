import React, { Component } from 'react';

class Cycle extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(`---componentWillReceiveProps`);
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`---shouldComponentUpdate`);
        console.log(nextProps)
        console.log(nextState);
        return true;
    }
    componentWillUpdate() {
        console.log('---componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('---componentDidUpdate');
    }
    componentWillMount() {
        console.log('---componentWillMount');
    }
    componentDidMount() {
        console.log('---componentDidMount');
    }
    componentWillUnmount() {
        console.log('---componentWillUnmount');
    }
    render() {
        console.log('---render');
        return (
            <span>{this.props.val}</span>
        );
    }
}



export default Cycle;
