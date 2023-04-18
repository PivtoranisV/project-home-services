import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
  name: 'cart-ui',
  initialState: { cartIsShowing: false },
  reducers: {
    showCart(state) {
      state.cartIsShowing = true;
    },
    hideCart(state) {
      state.cartIsShowing = false;
    },
  },
});

export const showCartAction = showCartSlice.actions;

export default showCartSlice;
