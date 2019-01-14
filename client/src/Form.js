import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        console.log(data)
        axios.post('http://localhost:5000/api/respondents',
        data)
        .then((result) => {
            console.log(result.data);
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fname">First name</label>
                <input
                    id="fname"
                    name="fname"
                    type="text" 
                    onChange={this.onChange}
                    />

                <label htmlFor="lname">Last name</label>
                <input 
                    id="lname"
                    name="lname"
                    type="text"
                    
                    onChange={this.onChange}
                    />

                <label htmlFor="email">email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    
                    onChange={this.onChange}
                    />

                <button type="submit">Send data</button>
            </form>
        )
    }
}

export default Form;
