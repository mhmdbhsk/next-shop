import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_TO_CART,
  CALCULATE_PRICE,
} from '@store/types/cart';

export const incrementItem = (incrementState: any) => (dispatch: any) => {
  const increase = incrementState + 1;

  return dispatch({
    type: INCREASE_ITEM,
    payload: increase,
  });
};

export const decrementItem = (decrementState: any) => (dispatch: any) => {
  const decrement = decrementState - 1;

  return dispatch({
    type: DECREASE_ITEM,
    payload: decrement,
  });
};

export const addToCart = (cartState: any) => (dispatch: any) => {};
