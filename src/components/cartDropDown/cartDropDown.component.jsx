import React from 'react'
import './cartDropDown.component.scss'
import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem.component'

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


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown)


