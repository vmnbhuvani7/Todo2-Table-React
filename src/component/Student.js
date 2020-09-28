import React, { Component } from 'react'

import AddStudent from './AddStudent'
import StudentTable from './StudentTable'

export class Student extends Component {
    state = {
        students: [
            {
                id: 1,
                name: "vaman",
                salary: 4000,
            },
            {
                id: 2,
                name: "vmn",
                salary: 6000,
            },
        ],
    }

    addStudent = (name, salary) => {
        this.setState({
            students: [...this.state.students, {
                name: name,
                salary: salary,
                // city:city,
                status: false,
                id: Math.random().toString(36).substr(2, 9)
            }]
        })
    }
    thumbUpDown = (id) => {
        const newStudents = this.state.students;
        const index = this.state.students.findIndex(item => {
            return item.id === id
        })
        newStudents[index].status = !newStudents[index].status;

        this.setState({
            students: newStudents
        })
    }

    addSalaryOfSameUser = (index, salary) => {

        const dummyStud = this.state.students;
        dummyStud[index].salary = parseInt(dummyStud[index].salary) + parseInt(salary);

        this.setState({
            students: dummyStud
        })
    }

    render() {


        // console.log(this.state.students.reduce(reducer));
        // let reducer = this.state.students.reduce(function (accumulator, currentValue) {
        //     debugger;
        //     return (accumulator.name === currentValue.name) ? (accumulator.salary + currentValue.salary) : (accumulator, currentValue)
        // })
        // console.log(reducer);

        return (
            <div className="App">
                <AddStudent
                    addStudent={this.addStudent}
                    updateStudent={this.addSalaryOfSameUser}
                    stnd={this.state.students}
                ></AddStudent>

                {this.state.students && (
                    <StudentTable
                        students={this.state.students}
                        thumbUpDown={this.thumbUpDown}
                    />
                )
                }
            </div>
        )
    }
}

export default Student
