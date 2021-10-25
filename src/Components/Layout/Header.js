import React,{Fragment} from 'react';
import ImageMeals from '../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{
    return(
        <Fragment>
           <header className={classes.header}>
               <h1>FleaMeals</h1>
               <HeaderCartButton onClick={props.showCart}/>
           </header>
           <div className={classes['main-image']}>
            <img src={ImageMeals} alt="A table full of delicious dishes"></img>
           </div>
        </Fragment>
    );
}

export default Header;