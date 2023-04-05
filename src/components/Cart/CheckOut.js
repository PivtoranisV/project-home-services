import React from 'react';
import styles from './CheckOut.module.css';

const CheckOut = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Address</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={props.onHideCart}
          className={styles.cancel}
        >
          Cancel
        </button>
        <button type="submit" className={styles.confirm}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
