import React from 'react';
import "./CheckoutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
         // remove itemes from the cart
         dispatch({
             type: 'REMOVE_FROM_CART',
             id: id,
             
         })

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image"  src={image}  alt=""
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><StarIcon /></p>
                    ))}
                </div>
                <button onClick={removeFromCart}> Remove from Cart</button>

            </div>

            
        </div>
    )
}

export default CheckoutProduct
