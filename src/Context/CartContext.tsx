import { useReducer, createContext } from "react";
import { Cart } from "../Interface/interface";
import { cartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext<Cart | null>(null);

interface Props {
  children: React.ReactNode;
}

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ product: state, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
