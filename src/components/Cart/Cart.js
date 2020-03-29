import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const totalPrice = cart[i];
        total = total + totalPrice.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.50;
    }else if(total > 0){
        shipping = 12.50;
    }
    const totalFix = total.toFixed(2);
    const tex = (total / 5).toFixed(2);
    const totalPrice = (total + shipping + Number(tex)).toFixed(2);

    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Ordered : {cart.length}</h4>
            <p>Product Price : {totalFix}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tex : {tex}</small></p>
            <p>Total Price : {totalPrice}</p>
        </div>
    );
};

export default Cart;