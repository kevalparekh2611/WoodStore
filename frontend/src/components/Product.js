import React from 'react';
import Rating from './Rating';

function Product(props) {

    const {product} = props;
    return (
        <div>
            <div key = {product._id} className="card">
                    <a href={`/product/${product._id}`} >
                        <img  className="medium" src={product.image} alt={product.name}></img>
                    </a>
                    <div className="cardbody">
                        <a href={`/product/${product._id}`} >
                            <h2>{product.name}</h2>
                        </a>
                        <Rating rating= {product.rating} numReviews= {product.numReviews}></Rating>
                        <div className="price"> Rs. {product.price} </div>
                    </div>
                </div>
                
        </div>
    );
}

export default Product;