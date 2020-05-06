import React from 'react';
import './App.css';
import Grocery from './componets/Groccey';
import Statas from './componets/statas'
import ShoppingBag from './componets/shoppingBag'

function App() {
  return (
    <div className="App">
      <Grocery/>
    <ShoppingBag/> 
     <Statas/>
      
    </div>
  );
}

export default App;
