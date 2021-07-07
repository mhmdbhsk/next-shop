import {
  CALCULATE_PRICE,
  DECREASE_ITEM,
  INCREASE_ITEM,
  ADD_TO_CART,
} from '../types/cart';

const initialState = {
  server: '',
  client: '',
  cart: [],
  price: 0,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    case INCREASE_ITEM:
      return { ...state, price: action.payload };
      break;
    case DECREASE_ITEM:
      return { ...state, price: action.payload };
      break;
    case CALCULATE_PRICE:
      return { ...state, price: action.payload };
    default:
      return state;
      break;
  }
}
