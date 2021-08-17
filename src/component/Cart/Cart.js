import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price ,0);

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
            
            <Link to="/review">
            <button className="main-button">Order Review</button>
            </Link>
            

        </div>
    );
};

export default Cart;