import { useReducer, createContext } from "react";
import { useImmerReducer } from "use-immer";
import { Cart } from "../Interface/interface";
import { cartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext<Cart>({});

interface Props {
  children: React.ReactNode;
}

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ product: state, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
