import React, { useState } from 'react'
import "../css/ShoppingCart.css"
import ItemsInCart from "../component/ItemsInCart"
const Shoppingcart = (props) => {
    const { visible, setvisible } = props
    const close = () => {
        setvisible(false)

    }
    return (
        <div className={visible === true ? ' visible' : "hidden"} >
            <div className={visible === true ? 'shoppingCart-bg visible' : "hidden"} onClick={close}>
            </div>

            <div className={visible === true ? 'shopping-cart visible' : "hidden"}>
                <div className='item-in-carts' >
                    <ItemsInCart />
                    <ItemsInCart />
                    <ItemsInCart />
                    <ItemsInCart />
                </div>
                <div className='subtotal'>
                    <div className='sub-t'><span>Subtotal</span>  <span>amount</span></div>
                    <div className='shipping'><span>Shipping</span> <span>amount</span></div>
                </div>
                <div className='total'>
                    <div className='total-amount'>
                        <span>Total</span>
                        <h3>Amount</h3>
                    </div>
                    <button className='place-order-btn'>Place order</button>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart