import React from 'react'

export default function cartScreen(props) {
    const productId =props.match.params.id;
    const qty = props.location.search ? 
    Number(props.location.search.split("=")[1]):
    1;

    return (
        <div>
            <h1>Welcome to Cart Screen</h1>
            <p> Add to cart details :
                ProductID = {productId} 
                Quantity = {qty}
            </p>
        </div>
    )
}

