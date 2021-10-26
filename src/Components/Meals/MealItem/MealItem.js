import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
<<<<<<< HEAD
const MealItem=(props)=>{

    const price= `$${props.price.toFixed(2)}`;
=======
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
const MealItem=(props)=>{

    const cartCtx= useContext(CartContext)
    const price= `$${props.price.toFixed(2)}`;
    const addToCart=(amount)=>{
        //console.log(amount);
            cartCtx.addItem({
                id: props.id,
                name: props.name,
                amount: amount,
                price: props.price,
            })
    }
>>>>>>> b96978b (commit-2)
    return(
       <li className={classes.meal}>
           <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
           </div>
<<<<<<< HEAD
           <MealItemForm />
=======
           <MealItemForm onAddtoCartAmount={addToCart}/>
>>>>>>> b96978b (commit-2)
       </li>
    )
}

export default MealItem;