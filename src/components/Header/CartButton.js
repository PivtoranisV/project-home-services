import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButton.module.css';

const CartButton = (props) => {
  const [animationShown, setAnimationShown] = useState(false);
  const ctx = useContext(CartContext);

  const { services } = ctx;

  const totalHours = services.reduce((prev, current) => {
    return prev + current.hours;
  }, 0);

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
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.total}>{totalHours}</span>
    </button>
  );
};

export default CartButton;
