import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import CheckOut from './CheckOut';

const Cart = (props) => {
  const [shownCheckout, setShownCheckout] = useState(false);

  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasServices = ctx.services.length > 0;
  const totalHours = ctx.services.reduce((prev, current) => {
    return prev + current.hours;
  }, 0);

  const addHandler = (service) => {
    ctx.addService({ ...service, hours: 1 });
  };
  const removeHandler = (id) => {
    ctx.removeService(id);
  };

  const orderHandler = () => {
    setShownCheckout(true);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {ctx.services.map((service) => (
        <CartItem
          key={service.id}
          name={service.name}
          price={service.price}
          hours={service.hours}
          onRemove={removeHandler.bind(null, service.id)}
          onAdd={addHandler.bind(null, service)}
        />
      ))}
    </ul>
  );

  const formButtons = (
    <div className={styles.actions}>
      <button className={styles.close} onClick={props.onHideCart}>
        Close
      </button>
      {hasServices && (
        <button className={styles.order} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!shownCheckout && cartItems}
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
      {shownCheckout && <CheckOut onHideCart={props.onHideCart} />}
      {!shownCheckout && formButtons}
    </Modal>
  );
};

export default Cart;
