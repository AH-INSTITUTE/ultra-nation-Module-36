import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Countery from './Components/Country/Countery';
import Cart from './Components/Cart/Cart';


function App() {
const [countries, setCountries] = useState([]);
const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(d => {
        setCountries(d);
        //console.log(d);
       //const names = d.map(p => p.name);
       //console.log(names);
      })
      .catch(er => console.log(er))
  }, []);
  const addCountry = (count)=>{
   const newCart = [...cart, count];
   setCart(newCart)
  }
  return (
    <div className="App">
      <h3>Countries Loaded: {countries.length}</h3>
      <h4>Country Added with Click : {cart.length} </h4>
      <Cart cart={cart}/>
      <div>
        {
          countries.map((p)=> {
          return <Countery key = {p.alpha3Code} addCountry ={addCountry} count={p}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
