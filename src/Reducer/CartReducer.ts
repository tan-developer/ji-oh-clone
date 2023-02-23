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

  console.count()
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_CART:

      for (const item of draft) {
        console.log(item)
        if (item.id === action.payload.id) {
          var indexOfProduct = draft.findIndex(i => i.id === action.payload.id);
          draft[indexOfProduct].amount++;
          return
        }
      }


      draft.push(action.payload);
      break;

    case ACTION_TYPE.REMOVE_FROM_CART:
      const index = draft.findIndex(item => item.id === action.payload.id);
      console.log(index)
      if (index > -1) {
        draft.splice(index, 1);
      }

      break;
    default:
      break;
  }
}


