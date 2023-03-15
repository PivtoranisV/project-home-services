import React from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[
        {
          id: 's1',
          name: 'General Home Cleaning',
          price: 15.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Hours</span>
        <span>4</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.close}>Close</button>
        <button className={styles.order}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
