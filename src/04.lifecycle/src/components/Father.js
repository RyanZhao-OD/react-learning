import React, {Component} from 'react';
import Son from './Son';
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
 * 如果是props改变：
   componentWillReceiveProps() -> shouldComponentUpdate() ->
   componentWillUpdate() -> render() -> componentDidUpdate()
 * 如果是state改变：
   shouldComponentUpdate() ->
   componentWillUpdate() -> render() -> componentDidUpdate()
 * 如果是forceUpdate()：
   componentWillUpdate() -> render() -> componentDidUpdate()

 * (3)销毁期
 * componentWillUnmount()
 * 每当组件使用完成，这个组件就必须从DOM中销毁，此时该方法就会被调用。
 * 当我们在组件中使用了setInterval，那我们就需要在这个方法中调用clearTimeout。
 */
export default class Father extends Component {
    // 实例属性写法 就不需要在constructor中定义了
    state = {
        propForSon1 : 'propForSon1',
        propForSon2 : 'propForSon2',
        state1: 'state1',
        state2: 'state2',
        showSon: true
    };

    static defaultProps = {
        prop1: 'prop1Val',
        prop2: 'prop2Val',
    };

    constructor(props, context, updater) {
        super(props, context, updater);
        console.log('Father constructor-----');
        console.log('这时候已经拿到props和state了');
        console.log(this.state);
        console.log(this.props);
    }
    componentWillMount() {
        console.log('Father componentWillMount-----');
    }

    render() {
        console.log('Father render-----');
        return  (
            <div>Father {this.state.state1} {this.state.state2}
            {
                !this.state.showSon ? null : (
                    <Son key="4"
                        sonProp1={this.state.propForSon1}
                        sonProp2={this.state.propForSon2}
                    />
                )
            }
            </div>
        );
    }

    componentDidMount() {
        console.log('Father componentDidMount-----');
        setTimeout(() => {
            this.setState({
                propForSon1: '(setState From Father) propForSon1',
                state1: '(setState From Father) state1'
            });

            setTimeout(() => {
                this.setState({
                    showSon: false
                });
                this.forceUpdate(() => {
                    console.log('Father forceUpdate-----');
                });
                setTimeout(() => {
                    this.setState({
                        showSon: true
                    });
                }, 2000);
            }, 2000);

        }, 2000);
        console.log('实例化 end==============================');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Father componentWillReceiveProps-----');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Father shouldComponentUpdate-----');
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Father componentWillUpdate-----');

    }
    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('Father componentDidUpdate-----');
        console.log('存在期 continue==============================');
    }
}
