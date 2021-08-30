import React from 'react'
import './signInAndSignUp.styles.scss'

import SignIn from '../../components/signIn/signIn.component'
import SignUp from '../../components/sign-up/signUp.component'

const SignInAndSignUp = () => {
    return (
        <div className='auth-page'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;
