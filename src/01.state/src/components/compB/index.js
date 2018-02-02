import React, {Component} from 'react';

class CompB extends Component {
    constructor(props) {
        super(props);
        console.log('CompB constructor------');
    }
    render() {
        return (
            <div>CompB</div>
        );
    }
}

export default CompB;
