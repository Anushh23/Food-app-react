import React from 'react';
import CartContext from './cart-context';
import {useState, useReducer} from 'react';

const defaultCartState={
    items: [],
    totalAmount: 0,
}
const cartReducer=(state, action)=>{
    if(action.type==='add')
    {
      const updatedItems= state.items.concat(action.item);
      const updatedTotalAmount= state.totalAmount+ action.item.price*action.item.amount;
      return{
          items: updatedItems,
          totalAmount: updatedTotalAmount,
      }
    }
    else if(action.type==='remove')
    {

    }
    return defaultCartState;
}
const CardProvider=(props)=>{

    const [cartState, dispatchCartAction]= useReducer(cartReducer, defaultCartState)
    const addItemHandler=(item)=>{
         dispatchCartAction({type: 'add', item: item})
    }

    const removeItemHandler=(id)=>{
          dispatchCartAction({type: 'remove', id: id})
    }
    const cartContext={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CardProvider;