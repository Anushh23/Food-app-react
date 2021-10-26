import React,{useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CardProvider from './Store/CardProvider';
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandlerFunction=()=>{
    setCartIsShown(true);
  }

  const hideCartHandlerFunction=()=>{
    setCartIsShown(false);
  }

  return (
    <CardProvider>
      {cartIsShown &&<Cart onConfirm={hideCartHandlerFunction}/>}
      <Header showCart={showCartHandlerFunction}/>
      <Meals />
    </CardProvider>
  );
}

export default App;
