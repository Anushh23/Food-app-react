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
      const existingCartItemIndex= state.items.findIndex(item=> item.id=== action.item.id);
      const existingCartItem= state.items[existingCartItemIndex];
      let updatedItems;
      if(existingCartItem)
      {
         const updatedItem={
             ...existingCartItem,
             amount: existingCartItem.amount+action.item.amount
         };
         updatedItems=[...state.items];
         updatedItems[existingCartItemIndex]=updatedItem;
      }  
      else{
        updatedItems= state.items.concat(action.item);
      }
      let updatedTotalAmount= state.totalAmount+ action.item.amount*action.item.price;
      return{
          items: updatedItems,
          totalAmount: updatedTotalAmount,
      }
    }
    else if(action.type==='remove')
    {
       const existingCartItemIndex= state.items.findIndex(item=>item.id===action.id) ;
       const existingCartItem= state.items[existingCartItemIndex];
       if(existingCartItem)
       {
           let updatedItems;
           if(existingCartItem.amount!==1)
           {const updatedItem={
               ...existingCartItem,
               amount: existingCartItem.amount-1
           };
               updatedItems=[...state.items];
               updatedItems[existingCartItemIndex]=updatedItem;
           }
           else{               
              updatedItems= state.items.filter(item=>item.id!==action.id);
           }
           let updatedTotalAmount=0;
           updatedItems.map(item=>updatedTotalAmount+=item.amount*item.price)
           return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
       }
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