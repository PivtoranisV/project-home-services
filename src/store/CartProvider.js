import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCart = {
  services: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedServices = state.services.concat(action.services);
    const updatedAmount =
      state.totalAmount + action.services.price * action.services.hours;
    return {
      service: updatedServices,
      totalAmount: updatedAmount,
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (service) => {
    dispatchCart({ type: 'ADD', service: service });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    services: cartState.services,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
