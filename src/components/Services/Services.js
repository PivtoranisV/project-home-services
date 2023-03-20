import React, { useState } from 'react';
import ListServices from './ListServices';
import ServicesSummary from './ServicesSummary';

const Services = () => {
  const [listShown, setListShown] = useState(false);
  const showListHandler = () => {
    setListShown(true);
  };

  return (
    <React.Fragment>
      {!listShown && <ServicesSummary onShowList={showListHandler} />}
      {listShown && <ListServices />}
    </React.Fragment>
  );
};

export default Services;
