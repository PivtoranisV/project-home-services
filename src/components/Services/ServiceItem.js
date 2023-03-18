import React, { useContext } from 'react';
import styles from './ServiceItem.module.css';
import ServiceItemForm from './ServiceItemForm';
import CartContext from '../../store/cart-context';

const Service = (props) => {
  const ctx = useContext(CartContext);

  const addToCartHandler = (hours) => {
    ctx.addService({
      id: props.id,
      name: props.name,
      price: props.price,
      hours: hours,
    });
  };

  return (
    <li className={styles.service}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <ServiceItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Service;
