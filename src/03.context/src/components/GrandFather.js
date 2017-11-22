import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Father from './Father';

export default class GrandFather extends Component {
    static childContextTypes = {
        user: PropTypes.object.isRequired
    };
    getChildContext() {
        return {
            user: {
                name: 'od'
            }
        };
    }

    render() {
        return (
            <div>
                GrandFather
                <Father/>
            </div>
        );
    }
}
