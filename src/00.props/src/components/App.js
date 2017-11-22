import React, {Component} from 'react';
import StudentList from './StudentList';
import StatelessComponent from './stateless';

export default class App extends Component {
    render() {
        return [
            <StudentList key="2" />,
            <StatelessComponent key="1" propStr="11" propNum={22}>
                children
            </StatelessComponent>
        ];
    }
}
