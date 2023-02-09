import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { createContext, useEffect, useReducer } from "react";
import { TListProduct } from "../Interface/interface";
import { ACTION, ShopFilterReducer, SORT } from "../Reducer/ShopFilter";

interface Context {
  // isLoading and product is require not option
  isLoading?: boolean;
  product?: TListProduct;
  dispatchProduct?: React.Dispatch<any> | any;
}

const asyncTimeout = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const fetchData: () => { product: Promise<any> } = () => {
  const Wrapper = async () => {
    const { data } = await axios.get(
      "https://api.npoint.io/4cb58b85d1670505a97a"
    );

    return data;
  };

  return { product: Wrapper() };
};

export const ShopContext = createContext<Context>({});

type Props = {
  children: JSX.Element;
};
const ShopContextProvider: React.FC<Props> = ({ children }) => {
  const isLoading = true;
  const [stateProduct, dispatchProduct] = useReducer(ShopFilterReducer, []);

  useEffect(() => {
    async function takeData() {
      const response = await fetch(
        "https://api.npoint.io/4cb58b85d1670505a97a"
      );

      dispatchProduct({
        type: ACTION.SET,
        details: SORT.SET,
        state: await response.json(),
      });
    }

    takeData();
  }, []);

  console.log(stateProduct);
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
