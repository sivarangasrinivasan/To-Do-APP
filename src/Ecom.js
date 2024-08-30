import React, { useState } from 'react';
import './Ecom.css';
import shirt from "./images/shirt.webp";
import shoe from "./images/shoes.webp";
import tshirt from "./images/tshirt.webp";
import watch from "./images/watch.webp";

const products = [
    { id: 1, name: 'BASICS', price: 20, image: shirt },
    { id: 2, name: 'NIKE', price: 30, image: shoe},
    { id: 3, name: 'PUMA', price: 25, image: tshirt },
    { id: 4, name: 'ROLEX', price: 40, image: watch },
];

function Ecom() {
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
       const selectedProduct = products.find(product => product.id === productId); 
       if (selectedProduct) {
        setCart([...cart, selectedProduct]);
       }
    };
 const checkout = () => {
    alert('Thank you for your purchase!');
    setCart([]);
 };

return (
    <div className="Ecom">
        <header className="Ecom-header">
            <h1>My E-commerce Store</h1>
        </header>
        <section className="Ecom-prod">
            {products.map(product => (
          <div key={product.id} className="Ecom-prod">
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto'}}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button class="cart" onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
            ))}
        </section>
        <section className="Ecom-cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={checkout}>Checkout</button>
        </section>
    </div>
);
}

export default Ecom;