import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

function ProductScreen(props) {

    const productDetails = useSelector( (state) => state.productDetails);
    const {loading , error , product} = productDetails;
    const productId = props.match.params.id; 
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch,productId])
    return (
        <div>
            {
                loading ?( <LoadingBox></LoadingBox> ):
                error ? (<MessageBox varient="problem"> {error} </MessageBox>):
                <div>
                    <Link to='/'> BACK </Link>
                    <hr></hr>
                <div className='row top'>
                    <div className='col-2'>
                            <img className='large' src={`../${product.image}`} alt={product.name}></img>
                    </div>
                    <div className='col-1'>
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                    <Rating 
                                        rating = {product.rating}
                                        numReviews = {product.numReviews}>

                                    </Rating>
                            </li>
                            <li>
                                Price : Rs. {product.price}
                            </li>
                            <li>
                                Description :
                                <p>
                                    {product.description}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-1'>
                        <div className='card cardbody'>
                            <ul>
                                <li>
                                    <div className='row '>
                                        <div>Price </div>
                                        <div className='largePrice'> Rs. {product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className='row '>
                                        <div> Status </div>
                                        <div>
                                            {
                                                product.countStock > 0 ? (
                                                    <span className='success'> Product In Stock </span>
                                                ):(
                                                        <span className = 'error'> Unavailable </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className='purchase block'> Add to Cart </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            } 
        </div>
        
    );
}

export default ProductScreen;