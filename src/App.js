import React,{useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
<<<<<<< HEAD
=======
import CardProvider from './Store/CardProvider';
>>>>>>> b96978b (commit-2)
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandlerFunction=()=>{
    setCartIsShown(true);
  }

  const hideCartHandlerFunction=()=>{
    setCartIsShown(false);
  }

  return (
<<<<<<< HEAD
    <React.Fragment>
      {cartIsShown &&<Cart onConfirm={hideCartHandlerFunction}/>}
      <Header showCart={showCartHandlerFunction}/>
      <Meals />
    </React.Fragment>
=======
    <CardProvider>
      {cartIsShown &&<Cart onConfirm={hideCartHandlerFunction}/>}
      <Header showCart={showCartHandlerFunction}/>
      <Meals />
    </CardProvider>
>>>>>>> b96978b (commit-2)
  );
}

export default App;
