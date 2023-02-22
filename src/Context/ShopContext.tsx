
import { createContext, useReducer, useState } from "react";
import { TListProduct } from "../Interface/interface";
import {ShopFilterReducer } from "../Reducer/ShopFilter";

interface Context {
  // isLoading and product is require not option
  isLoading?: boolean;
  product?: TListProduct | any;
  dispatchProduct?: React.Dispatch<any> | any;
}

export const ShopContext = createContext<Context>({});

type Props = {
  children: JSX.Element;
};
const ShopContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoading ] = useState<boolean>(true)
  const [stateProduct, dispatchProduct] = useReducer(ShopFilterReducer, []);


  return (
    <ShopContext.Provider
      value={{
        isLoading: isLoading,
        product: stateProduct,
        dispatchProduct: dispatchProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
