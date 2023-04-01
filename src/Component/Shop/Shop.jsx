import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    // get stored cart
   useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    console.log(savedCart)
    for(const id in storedCart){
        const addedCart = products.find(product => product.id === id);
        if(addedCart){
            const quantity = storedCart[id];
            addedCart.quantity = quantity;
            savedCart.push(addedCart)
        }
    }
    setCart(savedCart)
   } , [products])

    // Add to cart btn
    const handelAddToCart = (product) => {
        const newProduct = [...cart, product];
        setCart(newProduct);
        addToDb(product.id)
     }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}></Product>)
                }
            </div>
            <div className="carts-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;