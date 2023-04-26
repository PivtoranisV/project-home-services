import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import ServiceItem from '../components/Services/ServiceItem';
import Card from '../components/UI/Card';

const ServiceDetailPage = () => {
  const data = useLoaderData();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    });
  }

  const servicesList = loadedData.map((service) => (
    <ServiceItem
      id={service.id}
      name={service.name}
      description={service.description}
      price={service.price}
      key={service.id}
    />
  ));

  return (
    <Card>
      <ul>{servicesList}</ul>
    </Card>
  );
};

export default ServiceDetailPage;

export async function loader({ request, params }) {
  const id = params.serviceId;
  const response = await fetch(
    `https://home-services-40fc3-default-rtdb.firebaseio.com/${id}.json`
  );

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch detailed service' },
      { status: 500 }
    );
  } else {
    return response;
  }
}
