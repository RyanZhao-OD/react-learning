import React, {Component} from 'react';
import Student from './Student';

export default class StudentList extends Component {
    render() {
        const studentList = [
            {
                id: 1,
                name: 'name1',
                age: 'age1',
                children: 'children string'
            },
            {
                id: 2,
                name: 'name2',
                age: 'age2',
                children: 'children2'
            },
            {
                id: 3,
                name: 'name3',
                age: 'age3',
                children: '<span>children dom string</span>'
            }
        ];
        return (
            <ul>
            {
                studentList.map(student => {
                    return (
                        <Student key={student.id} name={student.name} age={student.age}>{student.children}</Student>
                    );
                })
            }
                <Student name="aaa" age="13"><span>children dom</span></Student>
            </ul>
        );
    }
}
