<<<<<<< HEAD
import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart =(props)=>{
    
  return(
     <Modal onConfirm={props.onConfirm}>
         <div>
             CartItem
         </div>
         <div className={classes.total}>
          <span>Total Amount</span>
          <span>$44.44</span>
         </div>
         <div className={classes.actions}>
             <button className={classes['button--alt']} onClick={props.onConfirm}>Close</button>
             <button className={classes.button}>Order</button>
=======
import React,{useContext, useState} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
const Cart =(props)=>{
    const cartCtx= useContext(CartContext);
    const hasItem= cartCtx.items.length>0;

    const CartItemRemoveHandler=()=>{

    }
    const CartItemAddHandler=()=>{

    }
  return(
     <Modal onConfirm={props.onConfirm}>
         <div>
             <ul className={classes['cart-items']}>
                 {cartCtx.items.map(item=>(
                     <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={CartItemRemoveHandler.bind(null,item.id)} onAdd={CartItemAddHandler.bind(null,item)}/>
                 ))}
             </ul>
         </div>
         <div className={classes.total}>
          <span>Total Amount</span>
          <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
         </div>
         <div className={classes.actions}>
             <button className={classes['button--alt']} onClick={props.onConfirm}>Close</button>
             {hasItem &&<button className={classes.button}>Order</button>}
>>>>>>> b96978b (commit-2)
         </div>
     </Modal>
  );
}

export default Cart;