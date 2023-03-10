import React from 'react';
import DUMMY_SERVICES from './dummyServices';
import styles from './ListServices.module.css';
import Service from './Service';

const ListServices = () => {
  const servicesList = DUMMY_SERVICES.map((service) => (
    <Service
      name={service.name}
      description={service.description}
      price={service.price}
      key={service.id}
    />
  ));

  return (
    <section className={styles.services}>
      <ul>{servicesList}</ul>
    </section>
  );
};

export default ListServices;
