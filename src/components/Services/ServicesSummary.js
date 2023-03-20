import React from 'react';
import styles from './ServicesSummary.module.css';

const ServicesSummary = (props) => {
  return (
    <section className={styles.summary}>
      <h2>House Cleaning Services</h2>
      <p>
        Getting your house cleaned is only a few clicks away.
        <em>
          <strong> Kumka </strong>
        </em>
        is here for all your home needs. House cleaning is a serious job, so you
        can let us do it to save time and energy.
      </p>
      <p>
        House cleaning is no easy task; with
        <em>
          <strong> Kumka</strong>
        </em>
        , you can leave it to professionals. Kumka's house cleaning service
        includes everything you need for a clean home. Our professionals are
        well-trained and equipped to clean your house with the best tools.
      </p>
      <button onClick={props.onShowList}>Book Now</button>
    </section>
  );
};

export default ServicesSummary;
