import React,{useContext, useState, useEffect} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
const HeaderCartButton=(props)=>{

    const [btnBump, setBtnBump]= useState(false);
    const cartCtx= useContext(CartContext);
    // const numberOfItems= cartCtx.items.reduce((variable,item)=>{
    //     return variable+ item.amount;
    // },0)
    let numberOfItems=0;
    cartCtx.items.map(item=>numberOfItems=numberOfItems+item.amount);

    useEffect(()=>{
         if(cartCtx.items.length===0){return;}
         setBtnBump(true);

         const removeBump=setTimeout(()=>{
            setBtnBump(false);
         },300)

         return ()=>{
             clearTimeout(removeBump);
         }
    },[cartCtx.items])
    return(
        <button className={`${classes.button} ${btnBump ? classes.bump :''}`} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}

export default HeaderCartButton;