import React from 'react'
import './cartDropDown.component.scss'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import CartItem from '../cartItem/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomButton from '../customButton/customButton.component'



const CartDropDown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className="empty-message">No Items Added</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>Go To CheckOut</CustomButton>

    </div>
)


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown))


