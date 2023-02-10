import { useState , createContext } from "react";
import { Product } from "../Interface/interface";

interface Context {
  current? : Product | any,
  setPageProduct?: React.Dispatch<any>
}
type Props = {
  children: JSX.Element;
};



export const ProductPageContext = createContext<Context>({});

const ProductPageContextProvider: React.FC<Props> = ({ children }) => {
  const [current, setCurrent] = useState<Product | {}>({});

  return (
    <ProductPageContext.Provider
      value={{ current: current, setPageProduct: setCurrent }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};

export default ProductPageContextProvider;
