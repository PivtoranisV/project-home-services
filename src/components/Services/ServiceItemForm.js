import React, { useRef } from 'react';
import Input from '../UI/Input';
import styles from './ServiceItemForm.module.css';

const ServiceItemForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredHours = +inputRef.current.value;
    props.onAddToCart(enteredHours);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Hours"
        input={{
          type: 'number',
          id: 'hours_' + props.id,
          min: '1',
          max: '4',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default ServiceItemForm;
