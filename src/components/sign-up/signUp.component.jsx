import React, { Component } from 'react'
import './signUp.styles.scss'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../customButton/customButton.component'

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords Dont Match')
            return;
        }

        try {
            //add to auth
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            //add to DB
            await createUserProfileDoc(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.log(err)
        }

    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type='text' label='Display Name' handleChange={this.handleChange} value={displayName} required />
                    <FormInput name="email" type='email' label='Email' handleChange={this.handleChange} value={email} required />
                    <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={password} required />
                    <FormInput name='confirmPassword' type='password' label='Confirm Password' handleChange={this.handleChange} value={confirmPassword} required />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
