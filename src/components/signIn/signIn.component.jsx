import React, { Component } from 'react'
import './signIn.styles.scss'

import FormInput from '../form-input/formInput.component'

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
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name="email" type="email" label='Email' handleChange={this.handleChange} value={this.state.email} required />

                    <FormInput name="password" type="password" label='password' handleChange={this.handleChange} value={this.state.password} required />

                    <input type='submit' value='submit form' />
                </form>
            </div>
        )
    }
}
