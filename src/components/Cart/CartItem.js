import React from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { price, name, hours, id } = props;
  const correctPrice = `$${price.toFixed(2)}`;
  const dispatch = useDispatch();

  const removeServiceHandler = () => {
    dispatch(cartActions.removeService({ id }));
  };
  const addServiceHandler = () => {
    dispatch(cartActions.addService({ id, name, price, hours: 1 }));
  };

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{correctPrice}</span>
          <span className={styles.hours}>{hours} hours</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeServiceHandler}>-</button>
        <button onClick={addServiceHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
