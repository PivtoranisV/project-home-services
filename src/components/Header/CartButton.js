import React from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButton.module.css';

const CartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.total}>3</span>
    </button>
  );
};

export default CartButton;
