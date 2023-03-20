import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasServices = ctx.services.length > 0;
  const totalHours = ctx.services.reduce((prev, current) => {
    return prev + current.hours;
  }, 0);

  const addHandler = () => {};
  const removeHandler = () => {};

  const cartItems = (
    <ul className={styles['cart-items']}>
      {ctx.services.map((service) => (
        <CartItem
          key={service.id}
          name={service.name}
          price={service.price}
          hours={service.hours}
          onRemove={removeHandler}
          onAdd={addHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <div>
          <span>Total Hours</span>
          <span className={styles.amount}>{totalHours}</span>
        </div>
        <div>
          <span>Total Amount</span>
          <span className={styles.amount}>{totalAmount}</span>
        </div>
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
