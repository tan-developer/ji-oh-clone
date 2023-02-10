import styles from "./CardProduct.module.scss";
import { Product } from "../../Interface/interface";
import { Link, Outlet } from "react-router-dom";

import React, { useContext, useState } from "react";
import { ProductPageContext } from "../../Context/ProductPageContext";

type UnwantedKey = {
  descripe: string;
  detail: string;
  color: string;
  type: string;
};

type Props = Omit<Product, keyof UnwantedKey>;

const CardProduct: React.FC<Props> = ({ img, price, title, state }) => {
  const { setPageProduct } = useContext(ProductPageContext);

  return (
      <Link className={styles.container}
        onClick={() => setPageProduct!(state)}
        to={`/shop/${title.toLocaleLowerCase().replace(/ /g, "-")}`}
      >
        <div className={styles.img}>
          <img src={img[0]} alt={title} className={styles.showImg} />
          <img src={img[1]} alt={title} className={styles.hoverImg} />
        </div>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.price}>${price}</p>
      </Link>
  );
};

export default CardProduct;
