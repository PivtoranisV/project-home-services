import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styles from './ListServices.module.css';
import ServiceItem from './ServiceItem';

const ListServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://home-services-40fc3-default-rtdb.firebaseio.com/services.json'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services.');
        }
        return response.json();
      })
      .catch((error) => setError(error))
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
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.error}>
        <p>{error.message}</p>
      </section>
    );
  }

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
