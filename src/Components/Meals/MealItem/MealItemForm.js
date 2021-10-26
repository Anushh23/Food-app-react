<<<<<<< HEAD
import React from 'react';
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
const MealItemForm=(props)=>{
    return(
     <form className={classes.form}>
         <Input label="Amount" input={{
=======
import React,{useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
const MealItemForm=(props)=>{

    const [amountIsValid, setAmountIsValid]=useState(true);
    const amountInputRef= useRef();
    const submitHandler=(e)=>{
          e.preventDefault();
          const enteredAmount= amountInputRef.current.value;
          const enteredAmountNumber=+enteredAmount;

          if(enteredAmount.trim().length===0||enteredAmountNumber<1|| enteredAmountNumber>10)
          {
               setAmountIsValid(false); 
               return; 
          }

          props.onAddtoCartAmount(enteredAmountNumber);
    }
    return(
     <form className={classes.form} onSubmit={submitHandler}>
         <Input 
            label="Amount"
            ref={amountInputRef}
            input={{
>>>>>>> b96978b (commit-2)
             id:'amount_'+props.id,
             type: 'number',
             min: '1',
             max: '10',
             step: '1',
             defaultValue:'1'
         }}/>
         <button>+ Add</button>
<<<<<<< HEAD
=======
         {!amountIsValid && <p>Please Enter a Valid amount (1-10).</p>}
>>>>>>> b96978b (commit-2)
     </form>
    );
}

export default MealItemForm;