import React, { Component, Children } from 'react';

class List extends Component {
    render() {
        // return (
        //     <div>{this.props.children}</div>
        // );
        let node = Children.map(this.props.children, (item) => {
            console.log(item);
            return (
                <li>{item}</li>
            );
        });        // React.Children
        console.log(Children);
        return (
            <ul>
                {node}
            </ul>

        );
    }
}



export default List;
