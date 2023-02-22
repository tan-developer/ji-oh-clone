import { Product } from './../Interface/interface';
import { CartProduct } from "../Interface/interface";

export enum ACTION_TYPE {
  ADD_TO_CART,
  REMOVE_FROM_CART
}


interface ACTIONS {
  type: ACTION_TYPE;
  payload: CartProduct;
}



export const cartReducer = (draft: CartProduct[], action: ACTIONS) => {
  if (draft.length === 0) {
    draft.push(action.payload);
    return;
  }
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_CART:

      for (const item of draft) {
        if (item.id === action.payload.id) {
          var indexOfProduct = draft.findIndex(i => i.id === action.payload.id);
          draft[indexOfProduct].amount = draft[indexOfProduct].amount + action.payload.amount
        }
      }

      draft.push(action.payload);
      break;

    case ACTION_TYPE.REMOVE_FROM_CART:
      const index = draft.findIndex(item => item.id === action.payload.id);

      if (index > -1) {
        draft.splice(index, 1);
      }

      break;
    default:
      break;
  }
}


