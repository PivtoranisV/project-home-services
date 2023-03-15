import React from 'react';
import styles from './ServiceItem.module.css';
import ServiceItemForm from './ServiceItemForm';

const Service = (props) => {
  return (
    <li className={styles.service}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <ServiceItemForm id={props.id} />
      </div>
    </li>
  );
};

export default Service;
