import React from 'react';

const CartContext = React.createContext({
  services: [],
  totalAmount: 0,
  addItem: (service) => {},
  removeItem: (id) => {},
});

export default CartContext;
