import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className = "checkout">
        <div className = "checkout__left">
            <img className = "checkout__ad" src =  "https://m.media-amazon.com/images/G/01/AMAZON_FASHION/2021/PRIME_WARDROBE/REBRAND/TBYB_Primary_4x._CB644650695_.png"/>
        

        {basket?.length === 0 ?  (
            <div> 
                <h2> Your shopping basket is empty</h2>
            </div>
        ) : (
            <div>
                <h2 className = "checkout__title"> your shopping basket</h2>
                {/* List out all the checkout products */}
                {basket.map(item => (
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}/>
                ))}
                
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className = "checkout__right">
                
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout