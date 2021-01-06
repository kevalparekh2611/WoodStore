import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
    
    const productList = useSelector((state) => state.productList);
    const dispatch = useDispatch();
    const {loading , error, products} = productList;
    useEffect( ()=> {
        dispatch(listProducts());
    },[dispatch]);
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