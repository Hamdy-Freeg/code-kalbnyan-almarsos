import React, { useContext } from 'react';

import MealITemForm from './MealItemForm';
import CartContext from '../../../store/Cart-context';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <h4 className={classes.price}>{price}</h4>
      </div>
      <div>
        <MealITemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
