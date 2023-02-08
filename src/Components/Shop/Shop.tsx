import { TListProduct, Product } from "../../Interface/interface";
import CardProduct from "../CardProduct/CardProduct";
import styles from "./Shop.module.scss";

import cardStyles from "../CardProduct/CardProduct.module.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  isLoading: boolean;
  listProduct: TListProduct;
}

const Shop: React.FC<Props> = (props) => {
  console.log(props.listProduct);

  const loadingState = [1, 2, 3];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {props.isLoading
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
          : props.listProduct.map((element) => (
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
