import React from 'react'
import data from './data'
function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className = "brand" href="/">WOODSTORE</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">SignIn</a>
                </div>
            </header>
            <main>
                <h2>Welcome to WoodStore. You choose best furniture from these products.</h2>
                <div className="row centre">
                {data.products.map( product =>(

                    <div key = {product._id} className="card">
                    <a href={`/product/${product._id}`} >
                        <img  className="medium" src={product.image} alt={product.name}></img>
                    </a>
                    <div className="cardbody">
                        <a href={`/product/${product._id}`} >
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i> </span>
                            <span><i className="fa fa-star"></i> </span>
                            <span><i className="fa fa-star"></i> </span>
                            <span><i className="fa fa-star"></i> </span>
                            <span><i className="fa fa-star"></i> </span>
                        </div>
                        <div className="price"> Rs. {product.price} </div>
                    </div>
                </div>
                
                ))}
                    
                </div>
            </main>
            <footer className="row centre">
                    Website created by Keval Parekh ©
            </footer>
        </div>
    
  );
}

export default App;
