import React from 'react';
import Input from '../UI/Input';
import styles from './ServiceItemForm.module.css';

const ServiceItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
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
