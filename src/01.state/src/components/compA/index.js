import React, {Component} from 'react';

class CompA extends Component {
    constructor(props) {
        super(props);
        console.log('CompA constructor------');
    }
    render() {
        return (
            <div>CompA</div>
        );
    }
}

export default CompA;
