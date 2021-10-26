import React,{useContext, useState} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
const Cart =(props)=>{
    const cartCtx= useContext(CartContext);
    const hasItem= cartCtx.items.length>0;

    const CartItemRemoveHandler=(id)=>{
         cartCtx.removeItem(id);
    }
    const CartItemAddHandler=(item)=>{
          cartCtx.addItem({...item, amount:1});
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
             {/* Order Button doesn't work  */}
             {hasItem &&<button className={classes.button}>Order</button>} 
             
         </div>
     </Modal>
  );
}

export default Cart;