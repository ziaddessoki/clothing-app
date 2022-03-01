import React from 'react'
import './cartItem.styles.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className="cart-details">
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
