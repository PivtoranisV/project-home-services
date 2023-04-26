import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/services';
import styles from './AllServices.module.css';

const AllServices = () => {
  return (
    <>
      <h1 className={styles.header}>Our Services</h1>
      <ul className={styles.services}>
        {servicesData.map((service) => (
          <li key={service.id} className={styles.item}>
            <Link to={service.id}>
              <div className={styles.image}>
                <img src={service.image} alt={service.title} />
              </div>
              <h2>{service.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllServices;
