import React, { Component } from 'react';

class About extends Component {
    render() {

        let { message, more } = this.props.params;
        return (
            <h1>About me, { message }, { more }</h1>
        );
    }
}
export default About;
