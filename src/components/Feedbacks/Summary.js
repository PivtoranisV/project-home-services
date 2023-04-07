import React from 'react';
import star from '../../assets/star.png';
import calendar from '../../assets/calendar.png';
import graphic from '../../assets/graphic.png';
import app from '../../assets/app.png';
import styles from './Summary.module.css';

const Summary = () => {
  return (
    <div>
      <div className={styles.text}>
        <h1>There are so many reasons to love Kumka Services!</h1>
        <h3>Here are the top 4!</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img src={star} alt="star" />
          </div>
          <h3>Top rated professionals</h3>
          <p>
            Our professionals are reliable & well-trained, with an average
            rating of 4.78 out of 5!
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src={calendar} alt="calendar" />
          </div>
          <h3>Same-day availability</h3>
          <p>Book in less than 60 seconds, and even select same-day slots.</p>
        </div>
        <div className={styles.card}>
          <div>
            <img src={graphic} alt="graphic" />
          </div>
          <h3>Top quality, value for money services</h3>
          <p>
            Our professionals are equipped with the best tools and our services
            are always priced with you in mind.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src={app} alt="app" />
          </div>
          <h3>Super app</h3>
          <p>
            Being a Super app means we’ve got the widest range of home services,
            so we’ve got you covered!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
