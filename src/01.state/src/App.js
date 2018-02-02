import React, {Component} from 'react';
import CompA from './components/compA';
import CompB from './components/compB';

class App extends Component {
    state = {
        switch: true
    };
    render() {
        return this.state.switch ? <CompA /> : <CompB />;
    }
}

export default App;
