import React from 'react';
import Product from '../components/Product';
import data from '../data';
function HomeScreen(props) {
    return (
        <div>
            <h2>Welcome to WoodStore. You choose best furniture from these products.</h2>
                <div className="row centre">
                    {data.products.map( product =>(
                        <Product key= {product._id} product={product}></Product>
                    ))}
                    
                </div>
        </div>
    );
}

export default HomeScreen;