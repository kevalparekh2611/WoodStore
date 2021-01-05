import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

function HomeScreen(props) {
    const [products, setProducts] = useState([]);
    const [loading ,setLoading] = useState(false);
    const [error ,setError] = useState(false);
    useEffect( ()=> {
        const fetchData = async () => {
            try {
                setLoading(true);
            const { data } = await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);   
            }          
        };
        fetchData();
    },[]);
    return (
        <div>
            <h2>Welcome to WoodStore. You choose best furniture from these products.</h2>
            {
                loading ?( <LoadingBox></LoadingBox> ):
                error ? (<MessageBox varient="problem"> {error} </MessageBox>):
                (<div className="row centre">
                    {products.map( product =>(
                        <Product key= {product._id} product={product}></Product>
                    ))}
                    
                </div>)
            }
            
                
        </div>
    );
}

export default HomeScreen;