import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = productKey => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        console.log("remove clicked",productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        
    },[]);

  let thankYou;
    if(orderPlaced){
        thankYou = <img style={{width:'100%'}} src={happyImage} alt="funPhoto" />
    }
     


    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        product={pd} 
                        removeProduct={removeProduct}
                        key={pd.key}></ReviewItem>)
                }
                {thankYou}
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;