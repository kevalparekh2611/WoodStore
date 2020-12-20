import React from 'react'
import Product from './components/Product';
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

                    <Product key= {product._id} product={product}></Product>
                    
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
