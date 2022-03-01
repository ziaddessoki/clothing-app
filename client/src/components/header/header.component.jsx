import React from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cartIcon/cartIcon.component'
import CartDropDown from '../cartDropDown/cartDropDown.component'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className="logo" />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>

                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to='/auth'>Sign In</Link>
                }
                <CartIcon className='option' />
            </div>
            {hidden && <CartDropDown />}

        </div>
    )
}
//destructing State { user: { currentUser }, cart: { hidden } 
//using createStructureSelector instead of keep passing the state as an argument for each re-selector function
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header)
