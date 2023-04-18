import React, { useContext } from 'react';
import useInput from '../../hooks/use-input';
import styles from './CheckOut.module.css';
import CartContext from '../../store/cart-context';
import { useDispatch } from 'react-redux';
import { showCartAction } from '../../store/cart-ui-slice';

const CheckOut = (props) => {
  const ctx = useContext(CartContext);

  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(showCartAction.hideCart());
  };

  const {
    value: nameInput,
    validValue: validName,
    invalidValue: invalidName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: addressInput,
    validValue: validAddress,
    invalidValue: invalidAddress,
    changeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== '');

  const {
    value: postalInput,
    validValue: validPostal,
    invalidValue: invalidPostal,
    changeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
    reset: resetPostal,
  } = useInput((value) => value.trim().length === 5);

  const {
    value: cityInput,
    validValue: validCity,
    invalidValue: invalidCity,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== '');

  const formIsValid = validName && validAddress && validPostal && validCity;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: nameInput,
      address: addressInput,
      city: cityInput,
      postal: postalInput,
    });
    resetName();
    resetAddress();
    resetPostal();
    resetCity();
    ctx.clearCard();
  };

  const nameInputClasses = `${styles.control} ${
    !invalidName ? '' : styles.invalid
  }`;
  const addressInputClasses = `${styles.control} ${
    !invalidAddress ? '' : styles.invalid
  }`;
  const postalInputClasses = `${styles.control} ${
    !invalidPostal ? '' : styles.invalid
  }`;
  const cityInputClasses = `${styles.control} ${
    !invalidCity ? '' : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {invalidName && (
          <p className={styles.error}>Please, provide your Name</p>
        )}
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="street">Address</label>
        <input
          type="text"
          id="street"
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          value={addressInput}
        />
        {invalidAddress && (
          <p className={styles.error}>Please, provide your Address</p>
        )}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal code</label>
        <input
          type="text"
          id="postal"
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          value={postalInput}
        />
        {invalidPostal && (
          <p className={styles.error}>
            Please, provide valid code (5 characters)
          </p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={cityInput}
        />
        {invalidCity && (
          <p className={styles.error}>Please, provide your City</p>
        )}
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={hideCartHandler}
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
