import React from 'react';
import Summary from './Summary';
import Feedback from './Feedback';

import styles from './Feedbacks.module.css';

const Feedbacks = () => {
  return (
    <div className={styles.container}>
      <Summary />
      <Feedback />
    </div>
  );
};

export default Feedbacks;
