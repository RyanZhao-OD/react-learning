import React, { Component } from 'react';

class Profile extends Component {
    render() {
        let {name, id, url} = this.props;

        return (
            <div>
                <img src={url} />
                <h1>{name} </h1>
                <h2>{id}</h2>
            </div>
        );
    }
}

Profile.propTypes = {
    url: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.number.isRequired
};
Profile.defaultProps = {
    url: 'xx',
    name: 'default name',
    id: 111
};

export default Profile;
