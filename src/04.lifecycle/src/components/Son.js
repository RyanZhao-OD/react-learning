import React, {Component} from 'react';

/**
 * 3个不同时刻：
 * (1)实例化：
 * getDefaultProps()    // 只会调用一次
 * getInitialState()
 * constructor()
 * componentWillMount() 组件首次渲染之前调用，这个是在render方法调用前可修改state的最后一次机会。
 * render()
 * componentDidMount() 这个方法在首次真实的DOM渲染后调用（仅此一次）当我们需要访问真实的DOM时，这个方法就经常用到。
 当需要请求外部接口数据，一般都在这里处理。

 * (2)存在期, 当props或者state发生变化时，下面方法依次被调用：
 * setProps() -> componentWillReceiveProps()
 */
export default class Son extends Component {
    static defaultProps = {
        sonDefaultProp1: 'sonDefaultProp1',
        sonDefaultProp2: 'sonDefaultProp2'
    };

    constructor(props, context, updater) {
        super(props, context, updater);
        console.log('Son constructor-----');
        console.log('这时候已经拿到props和state了');
        console.log(this.props);
    }
    componentWillMount() {
        console.log('Son componentWillMount-----');
    }

    render() {
        console.log('Son render-----');
        return  (
            <div>
                <div>Son</div>
                <div>{this.props.sonProp1} {this.props.sonProp2}</div>
            </div>
        );
    }
    componentDidMount() {
        console.log('Son componentDidMount-----');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Son componentWillReceiveProps-----');
        console.log(nextProps);
        console.log(nextContext);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Son shouldComponentUpdate-----');
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Son componentWillUpdate-----');
    }
    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('Son componentDidUpdate-----');
    }

    componentWillUnmount() {
        console.log('Son componentWillUnmount-----');
    }
}
