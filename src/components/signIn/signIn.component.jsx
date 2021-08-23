import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        console.log(e.target)
        const { value, name } = e.target

        this.setState({ [name]: value })


    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required />

                    <input type='submit' value='submit form' />
                </form>
            </div>
        )
    }
}
