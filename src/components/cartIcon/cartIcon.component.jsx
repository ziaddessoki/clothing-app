import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import './cartIcon.styles.scss'

function CartIcon() {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon
