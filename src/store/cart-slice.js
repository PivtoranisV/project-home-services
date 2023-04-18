import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    services: [],
    totalHours: 0,
    totalAmount: 0,
  },
  reducers: {
    addService(state, action) {
      const newService = action.payload;
      const existingService = state.services.find(
        (service) => service.id === newService.id
      );
      state.totalHours = state.totalHours + newService.hours;
      state.totalAmount =
        state.totalAmount + newService.hours * newService.price;
      if (!existingService) {
        state.services.push({
          id: newService.id,
          name: newService.name,
          price: newService.price,
          hours: newService.hours,
        });
      } else {
        existingService.hours = existingService.hours + newService.hours;
      }
    },
    removeService(state, action) {
      const idToRemove = action.payload.id;
      const existingService = state.services.find(
        (service) => service.id === idToRemove
      );
      state.totalHours--;
      state.totalAmount = state.totalAmount - existingService.price;
      if (existingService.hours === 1) {
        state.services = state.services.filter(
          (service) => service.id !== idToRemove
        );
      } else {
        existingService.hours--;
      }
    },
    clearCart(state) {
      return {
        services: [],
        totalHours: 0,
        totalAmount: 0,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
