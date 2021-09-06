import React from 'react'
import './cartDropDown.component.scss'
import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomButton from '../customButton/customButton.component'


const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton> Go To CheckOut</CustomButton>

    </div>
)


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)


