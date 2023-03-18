import React from 'react';

const CartContext = React.createContext({
  services: [],
  totalAmount: 0,
  addService: (service) => {},
  removeService: (id) => {},
});

export default CartContext;
