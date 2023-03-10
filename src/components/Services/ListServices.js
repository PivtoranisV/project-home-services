import React from 'react';
import Card from '../UI/Card';
import DUMMY_SERVICES from './dummyServices';
import styles from './ListServices.module.css';
import ServiceItem from './ServiceItem';

const ListServices = () => {
  const servicesList = DUMMY_SERVICES.map((service) => (
    <ServiceItem
      name={service.name}
      description={service.description}
      price={service.price}
      key={service.id}
    />
  ));

  return (
    <section className={styles.services}>
      <Card>
        <ul>{servicesList}</ul>
      </Card>
    </section>
  );
};

export default ListServices;
