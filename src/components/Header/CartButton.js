import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButton.module.css';

const CartButton = (props) => {
  const ctx = useContext(CartContext);

  const totalHours = ctx.services.reduce((prev, current) => {
    return prev + current.hours;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.total}>{totalHours}</span>
    </button>
  );
};

export default CartButton;
