import React from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'

const Header = () => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className="logo" />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
                <Link className='option' to='/auth'>Sign In</Link>
            </div>
        </div>
    )
}

export default Header
