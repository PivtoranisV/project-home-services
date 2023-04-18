import { configureStore } from '@reduxjs/toolkit';
import showCartSlice from './cart-ui-slice';

const store = configureStore({
  reducer: { cartUi: showCartSlice.reducer },
});

export default store;
