import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = () => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[
        {
          id: 's1',
          name: 'General Home Cleaning',
          hours: 2,
          price: 15.99,
        },
      ].map((item) => (
        <li>
          {item.name} {item.hours}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>31.98</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.close}>Close</button>
        <button className={styles.order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
