import React,{useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
const HeaderCartButton=(props)=>{

    const cartCtx= useContext(CartContext);
    const numberOfItems= cartCtx.items.reduce((variable,item)=>{
        return variable+ item.amount;
    },0)

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}

export default HeaderCartButton;