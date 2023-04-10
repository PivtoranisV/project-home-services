import React from 'react';
import FeedbackSlide from './FeedbackSlide';
import styles from './Feedback.module.css';

const Feedback = () => {
  return (
    <div className={styles.container}>
      <h1>What customers say about Kumka Services</h1>
      <h3>
        Kumka Services has been rated 4.8 out of 5 based on 962 reviews as of
        April 2023.
      </h3>
      <FeedbackSlide />
    </div>
  );
};

export default Feedback;
