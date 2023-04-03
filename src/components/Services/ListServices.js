import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styles from './ListServices.module.css';
import ServiceItem from './ServiceItem';

const ListServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      'https://home-services-40fc3-default-rtdb.firebaseio.com/services.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const loadedData = [];
        for (const key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setServices(loadedData);
      });
  }, []);

  const servicesList = services.map((service) => (
    <ServiceItem
      id={service.id}
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
