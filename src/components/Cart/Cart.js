import React, { useState, Fragment } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
import { useDispatch, useSelector } from 'react-redux';
import { showCartAction } from '../../store/cart-ui-slice';

const Cart = () => {
  const [shownCheckout, setShownCheckout] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [didOrder, setDidOrder] = useState(false);

  const dispatch = useDispatch();
  const hideCartHandler = () => {
    dispatch(showCartAction.hideCart());
  };

  const services = useSelector((state) => state.cart.services);
  const totalHours = useSelector((state) => state.cart.totalHours);
  const totalAmount = useSelector((state) =>
    Math.abs(state.cart.totalAmount.toFixed(2))
  );
  const hasServices = services.length > 0;

  const orderHandler = () => {
    setShownCheckout(true);
  };

  const confirmHandler = async (userData) => {
    setIsOrdering(true);
    await fetch(
      'https://home-services-40fc3-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          order: services,
        }),
      }
    );
    setIsOrdering(false);
    setDidOrder(true);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {services.map((service) => (
        <CartItem
          id={service.id}
          key={service.id}
          name={service.name}
          price={service.price}
          hours={service.hours}
        />
      ))}
    </ul>
  );

  const formButtons = (
    <div className={styles.actions}>
      <button className={styles.close} onClick={hideCartHandler}>
        Close
      </button>
      {hasServices && (
        <button className={styles.order} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartContent = (
    <Fragment>
      {!shownCheckout && cartItems}
      <div className={styles.total}>
        <div>
          <span>Total Hours</span>
          <span className={styles.amount}>{totalHours}</span>
        </div>
        <div>
          <span>Total Amount</span>
          <span className={styles.amount}>${totalAmount}</span>
        </div>
      </div>
      {shownCheckout && <CheckOut onConfirm={confirmHandler} />}
      {!shownCheckout && formButtons}
    </Fragment>
  );

  const orderingContent = <h2>Sending order...</h2>;

  const orderedContent = (
    <Fragment>
      <div className={styles.confirmed}>
        <h1>Order completed</h1>
        <p>Thank you for choosing Kumka Services</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.close} onClick={hideCartHandler}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal>
      {!isOrdering && !didOrder && cartContent}
      {isOrdering && orderingContent}
      {didOrder && orderedContent}
    </Modal>
  );
};

export default Cart;
