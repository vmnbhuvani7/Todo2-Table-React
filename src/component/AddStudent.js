import React, { Component } from 'react'

export class AddStudent extends Component {
    state = {
        name: "",
        // city:"",
        salary: '',
        // status: ''
    }

    changeText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let data = this.props.stnd.filter((nm) => {
            return nm.name === e.target.name.value
        })

        if (data.length > 0) {
            let idx = this.props.stnd.findIndex((item) => {
                return item.name === e.target.name.value
            })
            if (idx !== -1) {
                this.setState({
                    name: "",
                    salary: ''
                    // city:''
                })
                return this.props.updateStudent(idx, e.target.salary.value)

            }
        } else {

            this.props.addStudent(this.state.name, this.state.salary);
            // this.props.addStudent(this.state.name,this.state.city);

            this.setState({
                name: "",
                salary: ''
                // city:''
            })
        }

    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="">
                                    <label >Enter a Name:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={this.changeText}
                                        value={this.state.name}
                                        placeholder="Enter Your Name"
                                        name="name"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {/* <label >City:</label> */}
                                    <label >Salary:</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        onChange={this.changeText}
                                        value={this.state.salary}
                                        placeholder="Enter Your Salary"
                                        name="salary"
                                    />
                                    {/* <select required
                                onChange={this.changeCity}
                                value={this.state.city}
                                style={{width:"100%"}}
                                >
                                    <option value="">None</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Bardoli">Bardoli</option>
                                    <option value="Ahemdabad">Ahemdabad</option>
                                    <option value="Vadodara	">Vadodara	</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Bhavnagar">Bhavnagar</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Morbi">Morbi</option>
                                    <option value="Gandhidham">Gandhidham</option>
                                    <option value="Nadiad">Nadiad</option>
                                    <option value="Bharuch">Bharuch</option>
                                    <option value="Navsari">Navsari</option>
                                </select> */}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button className="btn btn-success" type="submit" >Add Name</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </div>
        )
    }
}

export default AddStudent
