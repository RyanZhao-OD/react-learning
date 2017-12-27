import React, {Component} from 'react';
import Li from './Li';

class App extends Component {
    state = {
        list: [
            {
                id: 1,
                val: '111'
            },
            {
                id: 2,
                val: '222'
            },
            {
                id: 3,
                val: '333'
            }
        ]
    }

    render() {
        console.log('看看传key和不传key的输出~~');
        return (
            <div className="App">
                <ul>
                {this.state.list.map(item => (
                    <Li key={item.id} val={item.val}></Li>
                ))}
                </ul>
            </div>
        );
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: [
                    {
                        id: 2,
                        val: '222'
                    },
                    {
                        id: 3,
                        val: '333'
                    }
                ]
            });
        }, 2000);
    }
}

export default App;
