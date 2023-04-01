import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
                <h5>Order Summary</h5>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Charge: ${totalShipping}</p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <div className="btn">
                <button className='btn-clear'>Clear Cart</button>
                <button className='btn-order'>Review Order</button>  
                </div>
        </div>
    );
};

export default Cart;