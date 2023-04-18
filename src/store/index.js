import { configureStore } from '@reduxjs/toolkit';
import showCartSlice from './cart-ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { cartUi: showCartSlice.reducer, cart: cartSlice.reducer },
});

export default store;
