import React, {Component} from 'react';

class Li extends Component {
    render() {
        return (
            <li>{this.props.val}</li>
        );
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Li componentWillReceiveProps-----');
        console.log(this.props);
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Li shouldComponentUpdate-----');
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Li componentWillUpdate-----');
    }
    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('Li componentDidUpdate-----');
    }
    componentWillUnmount() {
        console.log('销毁期===================');
        console.log(this.props);
        console.log('Son componentWillUnmount-----');
    }

}

export default Li;
