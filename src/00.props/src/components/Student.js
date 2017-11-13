import React, {Component} from 'react';

export default class App extends Component {
    render() {
        console.log(this.props);
        const {name, age, children} = this.props;
        return (
            <li>{name} {age} {children}</li>
        );
    }
}
