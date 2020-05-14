import React from 'react';
import './App.css';
import Grocery from './componets/Groccey';
import Statas from './componets/statas'
import ShoppingBag from './componets/shoppingBag';
import PocketMoney from './componets/pocketMoney'

function App() {
  return (
    <div className="App">

      <div className="jumbotron bg-primary">
       <h1>Shopping Bag</h1>
       <p className="text-danger">Select items in Shopping Bag</p>
      </div>
      <PocketMoney/>

      <Grocery/>
    <ShoppingBag/> 
     <Statas/>
      
    </div>
  );
}

export default App;
