import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    console.log(props.product);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-text">
                <h4>{name}</h4>
                <p><small>{seller}</small></p>
                <p>Price - ${price}</p>
                <p>Only {stock} left in stock - Buy Now<small>{}</small></p>
                <br/>
                <button className="btn-add"
                onClick ={ () => props.handelerAddBtn(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;