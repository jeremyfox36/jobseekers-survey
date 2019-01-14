import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: ""
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
           });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email
        }
        axios.post('http://localhost:5000/api/respondents',
        data)
        .then((result) => {
            console.log(result);
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                <label htmlFor="fname">First name</label>
                <input
                    className="form-control"
                    id="fname"
                    name="fname"
                    type="text" 
                    onChange={this.onChange}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="lname">Last name</label>
                <input 
                    className="form-control"
                    id="lname"
                    name="lname"
                    type="text"
                    onChange={this.onChange}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Send data</button>
            </form>
        )
    }
}

export default Form;
