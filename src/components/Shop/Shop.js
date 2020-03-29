import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const startEnd = fakeData.slice(0, 15); 
    const [products , setProduct] = useState(startEnd);   
    const [cart, setCart] = useState([]);
    
    const handelerAddBtn = (product) =>{
        console.log("click marca ", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
  

    return (
        <div className="product-container">
            <div className="product-container-left">
                {
                    products.map( product => <Product
                        handelerAddBtn = {handelerAddBtn} 
                        product={product} >
                        </Product>
                    )
                }
            </div>
            <div className="shopping-card">
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};


export default Shop;