import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import SpecialistsList from '../components/Specialists/SpecialistsList';

const SpecialistsPage = () => {
  const data = useLoaderData();
  const specialists = data.data;

  return <SpecialistsList specialists={specialists} />;
};

export default SpecialistsPage;

export async function loader() {
  const response = await fetch(
    'https://api.disneyapi.dev/character?pageSize=30&page=33'
  );
  if (!response.ok) {
    throw json({ message: 'Could not fetch list of specialists' });
  } else {
    return response;
  }
}
