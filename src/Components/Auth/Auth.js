import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '', 
            password: ''
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    registerUser = () => {
        const { username, password } = this.state; 
        axios.post('/auth/register', {username, password})
            .then(res => {
                this.props.history.push('/dashboard')
            })
    };

    loginUser = () => {
        const { username, password } = this.state; 
        console.log('clicked')
        axios.post('/auth/login', { username, password })
            .then( res => {
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        return (
            <div>
                <h2>login</h2>
                <input type='text' 
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}/>

                <input type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}/>
                <button onClick={this.loginUser}>login</button>
                <button onClick={this.registerUser}>register</button>
            </div>
        )
    }
};
