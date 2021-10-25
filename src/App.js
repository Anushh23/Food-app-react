import React,{useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandlerFunction=()=>{
    setCartIsShown(true);
  }

  const hideCartHandlerFunction=()=>{
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown &&<Cart onConfirm={hideCartHandlerFunction}/>}
      <Header showCart={showCartHandlerFunction}/>
      <Meals />
    </React.Fragment>
  );
}

export default App;
