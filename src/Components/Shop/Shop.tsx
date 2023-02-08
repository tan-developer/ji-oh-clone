import { useContext, useState } from "react";

import { TListProduct, Product } from "../../Interface/interface";
import CardProduct from "../CardProduct/CardProduct";
import styles from "./Shop.module.scss";

import cardStyles from "../CardProduct/CardProduct.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ShopContext } from "../../Context/ShopContext";

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
  // listProduct: TListProduct;
}

const Shop: React.FC<Props> = (props) => {
  const { isLoading, product } = useContext(ShopContext);
  const [shopMenu, setMenu] = useState<string>("");
  const loadingState = [1, 2, 3];

  return (
    <section className={styles.section}>
      <div className={styles.filter}>
        <span className={shopMenu === "filter" ? styles.minus : styles.plus}>
          filter :
        </span>
        <span className={shopMenu === "sort" ? styles.minus : styles.plus}>
          sort :{" "}
        </span>

        <div className={styles.dropDown}>
          <span className={styles.type}>BAGS</span>
          <span className={styles.sort}>
            <span>MOST RECENT</span>
            <span>PRICE (LOW TO HIGH)</span>
            <span>PRICE (HIGH TO LOW)</span>
          </span>
        </div>
      </div>
      <div className={styles.container}>
        {isLoading
          ? loadingState.map((_, index) => {
              return (
                <div className={cardStyles.container}>
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
            })
          : product!.map((element) => (
              <CardProduct
                img={element.img}
                title={element.title}
                price={element.price}
                key={element.title}
              />
            ))}
      </div>
    </section>
  );
};

export default Shop;
