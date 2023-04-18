import React from 'react';
import styles from './ServiceItem.module.css';
import ServiceItemForm from './ServiceItemForm';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Service = (props) => {
  const { id, name, description, price } = props;

  const dispatch = useDispatch();
  const addToCartHandler = (hours) => {
    dispatch(cartActions.addService({ id, name, price, hours }));
  };

  return (
    <li className={styles.service}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <ServiceItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Service;
