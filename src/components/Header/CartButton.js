import React, { useState, useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import { useDispatch } from 'react-redux';
import { showCartAction } from '../../store/cart-ui-slice';
import { useSelector } from 'react-redux';

import styles from './CartButton.module.css';

const CartButton = () => {
  const [animationShown, setAnimationShown] = useState(false);
  const totalHours = useSelector((state) => state.cart.totalHours);
  const services = useSelector((state) => state.cart.services);

  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(showCartAction.showCart());
  };

  const btnClasses = `${styles.button} ${animationShown ? styles.wiggle : ''}`;

  useEffect(() => {
    if (services.length === 0) {
      return;
    }
    setAnimationShown(true);

    const timer = setTimeout(() => {
      setAnimationShown(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, [services]);

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.total}>{totalHours}</span>
    </button>
  );
};

export default CartButton;
