import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
export default class Son extends Component {
    static contextTypes = {
        user: PropTypes.object.isRequired
    };
    constructor(props, context, updater) {
        super(props, context, updater);
        console.log('Son constructor-----');
        console.log(context);
    }
    render() {
        return (
            <div>Son {this.context.user.name}</div>
        );
    }
}
*/
const Son = (props, context, updater) => {
    console.log(context);
    return (
        <div>Son {context.user.name}</div>
    );
};
Son.contextTypes = {
    user: PropTypes.object.isRequired
};

export default Son;
