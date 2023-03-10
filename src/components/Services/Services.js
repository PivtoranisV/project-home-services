import React from 'react';
import ListServices from './ListServices';
import ServicesSummary from './ServicesSummary';

const Services = () => {
  return (
    <React.Fragment>
      <ServicesSummary />
      <ListServices />
    </React.Fragment>
  );
};

export default Services;
