import React from 'react';

const Service = (props) => {
  return (
    <li>
      <section>{props.name}</section>
      <section>{props.description}</section>
      <section>${props.price}</section>
    </li>
  );
};

export default Service;
