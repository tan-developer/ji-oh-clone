import { useContext, useEffect, useState } from "react";
import { ProductPageContext } from "../../Context/ProductPageContext";
import { Product } from "../../Interface/interface";
import styles from "./PruductPage.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CartContext } from "../../Context/CartContext";
import { ACTION_TYPE } from "../../Reducer/CartReducer";
import { takeData } from "../Shop/Shop";

import { ShopContext } from "../../Context/ShopContext";



interface Props {}

const ProductPage: React.FC<Props> = ({}) => {
  const {product ,  dispatchProduct } = useContext(ShopContext);
  
  
  useEffect(() => {
    takeData(dispatchProduct)
  } , [])

  const url = document.location.href.split("/");

  const current = product?.filter((product : Product) => {
    return url[url.length - 1] == product.title.toLocaleLowerCase().replace(/ /g, "-")
  })


  
  const [text, update] = useState<string>("Add to cart");

  const { dispatch } = useContext(CartContext);

  if (product.length === 0) {
    return (
      <div className={styles.productPage}>
        <h1 className={styles.productPage__title}>No Product Found</h1>
      </div>
    )
  }


  const { title, color, descripe, detail, img, price } = current![0];

  

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
            img.map((e: string, i: number) => (
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
          <button
            onClick={async () => {
              await setTimeout(() => {
                update("Added!");
              }, 100);
              await dispatch!({
                type: ACTION_TYPE.ADD_TO_CART,
                payload: {
                  ...current![0],
                  amount: 1,
                  id: title,
                },
              });

              await setTimeout(() => {
                update("Add to cart");  
              }, 2000);
            }}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );

};

export default ProductPage;
