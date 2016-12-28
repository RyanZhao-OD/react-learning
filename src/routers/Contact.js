import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount() {
        this.context.router.setRouteLeaveHook(this.props.route, this.leaveHook);
    }
    leaveHook(nextLocation) {
        return 'are you sure?';
    }

    render() {
        console.log(this.context);
        return (
            <h1>Contact me</h1>
        );
    }
}

Contact.contextTypes = {
    router: React.PropTypes.object
};
export default Contact;
