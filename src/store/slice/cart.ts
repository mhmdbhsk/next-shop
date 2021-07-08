import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '@store/store';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  items: [{ id: 0 }],
  price: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartItem(state, { payload }) {
      state.items = [...state.items, payload];
    },
    increaseItem(state, { payload }) {
      state.price += 1;
    },
    decreaseItem(state) {
      state.price -= 1;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.cart,
    }),
  },
});

export const { increaseItem, decreaseItem } = cartSlice.actions;

export const selectCart = (state: AppState) => state[cartSlice.name];
