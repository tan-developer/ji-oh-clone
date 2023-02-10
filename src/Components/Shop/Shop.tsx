import { useContext, useEffect, useState } from "react";

import { TListProduct, Product } from "../../Interface/interface";
import CardProduct from "../CardProduct/CardProduct";
import styles from "./Shop.module.scss";

import cardStyles from "../CardProduct/CardProduct.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ShopContext } from "../../Context/ShopContext";
import { ACTION, SORT } from "../../Reducer/ShopFilter";
import { spawn } from "child_process";

type _2 = {
  children: any | JSX.Element | JSX.Element[];
};

const Box = ({ children }: _2) => {
  return (
    <div
      style={{
        // border: "3px solid #ccc",
        display: "block",
        padding: "2rem 0",
      }}
    >
      {children}
    </div>
  );
};

interface Props {
  // isLoading: boolean;
  // product: TListProduct;
  // dispatchProduct : any
}

const Shop: React.FC<Props> = () => {
  const { isLoading, product, dispatchProduct } = useContext(ShopContext);
  const [shopMenu, setMenu] = useState<string>("");
  const loadingState = [1, 2, 3];

  const handlerMenu: (filter: string) => void = (filter: string) => {
    filter === shopMenu ? setMenu("") : setMenu(filter);
  };

  useEffect(() => {
    // trigger re-render component and close the filter menu

    setMenu("");
  }, [product]);

  useEffect(() => {
    async function takeData() {
      const response = await fetch(
        "https://api.npoint.io/e57853cdc0483b76c002"
      );

      dispatchProduct({
        type: ACTION.SET,
        details: SORT.SET,
        state: await response.json(),
      });
    }

    takeData();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.filter}>
        <span
          className={shopMenu === "filter" ? styles.minus : styles.plus}
          onClick={() => handlerMenu("filter")}
        >
          filter :
        </span>
        <span
          className={shopMenu === "sort" ? styles.minus : styles.plus}
          onClick={() => handlerMenu("sort")}
        >
          sort :{" "}
        </span>

        <div className={styles.dropDown}>
          <span
            className={
              shopMenu === "filter"
                ? styles.type
                : `${styles.type} ${styles.hidden}`
            }
          >
            BAGS
          </span>
          <span
            className={
              shopMenu === "sort"
                ? styles.sort
                : `${styles.sort} ${styles.hidden}`
            }
          >
            <span
              onClick={() => {
                dispatchProduct({ type: ACTION.SORT, details: SORT.RECENT });
                setMenu("");
              }}
            >
              MOST RECENT
            </span>
            <span
              onClick={() => {
                dispatchProduct({ type: ACTION.SORT, details: SORT.LOWTOHIGH });
                setMenu("");
              }}
            >
              PRICE (LOW TO HIGH)
            </span>
            <span
              onClick={() => {
                dispatchProduct({ type: ACTION.SORT, details: SORT.HIGHTOLOW });
                setMenu("");
              }}
            >
              PRICE (HIGH TO LOW)
            </span>
          </span>
        </div>
      </div>

      <div className={styles.container}>
        {!(product!.length <= 0)
          ? product!.map((element) => (
              <CardProduct
                img={element.img}
                title={element.title}
                price={element.price}
                key={element.title}
                state={element}
              />
            ))
          : loadingState.map((_, index) => {
              return (
                <div className={cardStyles.container} key={index}>
                  <SkeletonTheme baseColor="#ECE8DD" highlightColor="#F8F4EA">
                    <Box>
                      <Skeleton
                        count={1}
                        width={400}
                        height={600}
                        borderRadius={10}
                      />
                    </Box>
                    <Skeleton
                      count={1}
                      width={150}
                      height={12}
                      borderRadius={5}
                      className={cardStyles.title}
                    />
                    <Skeleton
                      count={1}
                      width={100}
                      borderRadius={5}
                      className={cardStyles.price}
                    />
                  </SkeletonTheme>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Shop;
