import { useContext } from "react";
import { ProductPageContext } from "../../Context/ProductPageContext";
import { Product } from "../../Interface/interface";
import styles from "./PruductPage.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface Props {
  product: Product;
}

const ProductPage: React.FC = ({}) => {
  const { current } = useContext(ProductPageContext);
  const { title, color, descripe, detail, img, price, type } = current;

  return (
    <div className={styles.container}>
      <div className={styles.row_1}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.descripe}>
          <h5>{descripe}</h5>
        </div>

        <span className={styles.detail}>
          <h4>DETAILS</h4>

          <h5 dangerouslySetInnerHTML={{ __html: detail }}></h5>
        </span>
      </div>

      <div className={styles.row_2}>
        <Carousel autoPlay={true} infiniteLoop={true}>
          {img ? (
            img.map((e: string , i : number) => (
              <div key={i}>
                <img src={e} alt="" />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </Carousel>
      </div>


      <div className={styles.row_3}>
        <div className={styles.size}>
          <h5>size : </h5> <h5 className={styles.under}>o/s</h5>
        </div>

        <div className={styles.color}>
          <h5>color : </h5> <h5 className={styles.under}>{color}</h5>
        </div>

        <div className={styles.price}>
          <h1>${price}</h1>
        </div>

        <div className={styles.button}>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
