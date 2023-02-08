import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useContext, createContext } from "react";
import { TListProduct } from "../Interface/interface";

interface Context {
  // isLoading and product is require not option
  isLoading?: boolean;
  product?: TListProduct;
}

const asyncTimeout = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const useProduct = () => {
  const { isLoading, data } = useQuery(
    ["PRODUCT"],
    async () => {
      const { data } = await axios.get(
        "https://api.npoint.io/0b8e49eeb12787d042a2"
      );
      await asyncTimeout(1000);
      return data;
    },
    {
      enabled: true,
      refetchOnMount: false,
    }
  );

  return { isLoading, product: data };
};

export const ShopContext = createContext<Context>({});

type Props = {
  children: JSX.Element;
};
const ShopContextProvider: React.FC<Props> = ({ children }) => {
  const {isLoading , product} = useProduct()

  return (
    <ShopContext.Provider value={{ isLoading: isLoading, product: product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
