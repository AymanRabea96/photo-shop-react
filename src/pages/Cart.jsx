import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"


function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const [finishOrderText, setFinishOrderText] = useState("")
    const { cartItems, emptyCart } = useContext(Context)
    const cartElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalPrice = cartElements.reduce((prev, current) => {
        return prev + 5.99
    }, 0)
    function handleOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            setButtonText('Place Order')
            setFinishOrderText("Thanks, Your order is in it's way!")
            emptyCart()
        }, 3000);


    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost">Total: {totalPrice.toLocaleString('en-US', { style: "currency", currency: "USD" })} </p>
            {
                cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={handleOrder} >{buttonText}</button>
                    </div> :
                    <p>You have no items on your cart</p>
            }
            <h3 className="orderedFinish">{finishOrderText}</h3>

        </main>
    )
}

export default Cart