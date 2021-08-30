import React, { Component } from 'react'
import './signIn.styles.scss'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../customButton/customButton.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.log(err)
        }

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

                    <FormInput name="password" type="password" label='Password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
