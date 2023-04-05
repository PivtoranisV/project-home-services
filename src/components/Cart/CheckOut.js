import React from 'react';
import styles from './CheckOut.module.css';

const CheckOut = (props) => {
  return (
    <form>
      <div className={styles.controls}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.controls}>
        <label htmlFor="street">Address</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.controls}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.controls}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onHideCart}>
        Cancel
      </button>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default CheckOut;
