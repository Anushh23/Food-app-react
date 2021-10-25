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
         </div>
     </Modal>
  );
}

export default Cart;