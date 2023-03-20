import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCart = {
  services: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingServiceIndex = state.services.findIndex(
      (service) => service.id === action.service.id
    );
    const existingService = state.services[existingServiceIndex];

    let updatedServices;

    if (existingService) {
      const updatedService = {
        ...existingService,
        hours: existingService.hours + action.service.hours,
      };
      updatedServices = [...state.services];
      updatedServices[existingServiceIndex] = updatedService;
    } else {
      updatedServices = state.services.concat(action.service);
    }

    const updatedAmount =
      state.totalAmount + action.service.price * action.service.hours;
    return {
      services: updatedServices,
      totalAmount: updatedAmount,
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addServiceHandler = (service) => {
    dispatchCart({ type: 'ADD', service: service });
  };
  const removeServiceHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    services: cartState.services,
    totalAmount: cartState.totalAmount,
    addService: addServiceHandler,
    removeService: removeServiceHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
