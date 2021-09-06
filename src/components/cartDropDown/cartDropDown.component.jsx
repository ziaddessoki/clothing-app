import React from 'react'
import './cartDropDown.component.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from '../cartItem/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../customButton/customButton.component'


//can get dispatch and fire it inside the component since it comes as a prop with connect if the 2nd argument is not passed,
//and dont have to create mapDispatchToProps
const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className="empty-message">No Items Added</span>
            }
        </div>
        <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>Go To CheckOut</CustomButton>

    </div>
)


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropDown))


