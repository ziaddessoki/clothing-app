import React from 'react'
import './cartDropDown.component.scss'

import CustomButton from '../customButton/customButton.component'
function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton> Go To CheckOut</CustomButton>
            </div>
        </div>
    )
}

export default CartDropDown
