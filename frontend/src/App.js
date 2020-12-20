import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
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

                <Route path='/' component={HomeScreen} exact></Route>
                <Route path='/product/:id' component={ProductScreen}></Route>
                
                
            </main>

            <footer className="row centre">
                    Website created by Keval Parekh ©
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
