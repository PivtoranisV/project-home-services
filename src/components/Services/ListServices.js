import useData from '../../hooks/use-data';
import Card from '../UI/Card';
import styles from './ListServices.module.css';
import ServiceItem from './ServiceItem';

const transformData = (dataObj) => {
  const loadedData = [];
  for (const key in dataObj) {
    loadedData.push({
      id: key,
      name: dataObj[key].name,
      description: dataObj[key].description,
      price: dataObj[key].price,
    });
  }
  return loadedData;
};
const url =
  'https://home-services-40fc3-default-rtdb.firebaseio.com/services.json';

const ListServices = () => {
  const [data, isLoading, error] = useData(url, transformData);

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

  const servicesList = data.map((service) => (
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
