import React, { Component } from 'react'

export class StudentTable extends Component {
    
    onClickHandler=(event,id)=>{
        event.preventDefault();
        this.props.thumbUpDown(id)
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead  className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">salary</th>
                            {/* <th scope="col">City</th> */}
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((student,index)=>(
                        <tr key={index}>
                            <th scope="row">{student.id}</th>
                            <td>{student.name}</td>
                            <td>{student.salary}</td>
                            {/* <td>{student.city}</td> */}
                            <td>
                                <a href="#" onClick={(event)=>{this.onClickHandler(event,student.id)}}>
                                <i className={student.status?"fa fa-thumbs-o-down":"fa fa-thumbs-o-up"} ></i>
                                </a>
                            </td>
                        </tr>
                            ))}
                    </tbody>
                    </table>
            </div>
        )
    }
}


export default StudentTable
