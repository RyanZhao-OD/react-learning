import React from 'react';
import PropTypes from 'prop-types'

const StatelessComponent = ({propStr, propNum, children}, context, updater) => {
    console.log(propStr);
    console.log(propNum);
    console.log(children);
    console.log(context);
    console.log(updater);
    return (
        <div>{propStr + children + propNum}</div>
    );
};

StatelessComponent.propTypes = {
    propStr: PropTypes.string,
    propNum: PropTypes.number
};

export default StatelessComponent;
