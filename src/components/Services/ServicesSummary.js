import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ServicesSummary.module.css';

const ServicesSummary = (props) => {
  return (
    <section className={styles.summary}>
      <h2>Kumka Services</h2>
      <p>
        Getting your house cleaned or maybe manicures, pedicures, massage and
        much more is only a few clicks away.
        <em>
          <strong> Kumka </strong>
        </em>
        is here for all your needs. Expert professionals offer you multiple
        services at your home.
      </p>
      <p>
        There is no limit to the services you can get at home; with
        <em>
          <strong> Kumka</strong>
        </em>
        , you can continue to feel very special.
      </p>
      <p>
        Even though taking a break from your hectic schedule can be challenging,
        pampering yourself is equally important. Even hard workers occasionally
        need to take a break to reflect, breathe, and unwind. So how about a
        home massage or manicure and pedicure?
      </p>
      <h3>Leave your to-do list to us!</h3>
      <Link to="/services">Check out our home services</Link>
    </section>
  );
};

export default ServicesSummary;
