import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

// import './index.css';
import NavLink from './NavLink';

class RouterApp extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/about/${userName}/${repo}`;

        // browserHistory.push(path);

        console.log(this.context);
        this.context.router.push(path);
    }
    handleGoBack(event) {
        // browserHistory.goBack();
        this.context.router.goBack();
    }
    render() {
        // return (
        //     <div>
        //         <h1> hello react </h1>
        //         <ul>
        //
        //             <li>
        //                 <Link to="/" activeStyle={{ color: "red" }}>首页</Link>
        //             </li>
        //             <li>
        //                 <Link to="/contact" activeClassName="active">联系我们</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about" activeStyle={{ color: "yellow", fontSize: "18px" }}>关于我们</Link>
        //             </li>
        //         </ul>
        //         { this.props.children }
        //     </div>
        // );

        return (
            <div>
                <h1> hello react </h1>
                <ul>
                    <li>
                        {/*<NavLink url="/" linkName="首页" />*/}
                        <IndexLink to="/" activeStyle={{color: 'yellow'}}>首页</IndexLink>
                    </li>
                    <li>
                        <NavLink url="/contact" linkName="联系我们" />
                    </li>
                    <li>
                        <NavLink url="/about" linkName="关于我们" />
                    </li>
                    <li>
                        <form action="" onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" placeholder="username" />
                            <input type="text" placeholder="repo" />
                            <button type="submit">submit</button>
                            <button onClick={this.handleGoBack.bind(this)}>go back</button>
                        </form>
                    </li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}

RouterApp.contextTypes = {
    router: React.PropTypes.object
};

export default RouterApp;
