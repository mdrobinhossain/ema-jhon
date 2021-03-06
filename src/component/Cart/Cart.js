import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // 
    let total=0;
    for(let i=0 ; i<cart.length ; i++){
        const product = cart[i];
        total = total + product.price*product.quantity;
    }

    let shipping = 0;
    if(total > 35) shipping = 0;
    else if(total>15) shipping = 4.99;
    const tax = total/10;

    const grandTotal = total + tax + shipping;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Product price:{formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT: {formatNumber(tax)}</p>
            <p>Total price: {formatNumber(grandTotal)}</p>
            <br />
            {
                props.children
            }
            
            

        </div>
    );
};

export default Cart;