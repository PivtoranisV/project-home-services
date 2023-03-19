import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasServices = ctx.services.length > 0;

  const cartItems = (
    <ul className={styles['cart-items']}>
      {ctx.services.map((service) => (
        <li>
          {service.name} {service.hours}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.close} onClick={props.onHideCart}>
          Close
        </button>
        {hasServices && <button className={styles.order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
