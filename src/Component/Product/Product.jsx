import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-body">
            <h4 className='product-name'>{name}</h4>
            <p>Price: ${price}</p>
            <p className='manufacture'>Manufacturer : {seller}</p>
            <p>Rating : {ratings}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;