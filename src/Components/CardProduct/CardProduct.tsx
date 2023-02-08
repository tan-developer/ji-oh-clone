import styles from "./CardProduct.module.scss";
import { Product } from "../../Interface/interface";



import React ,{useState} from "react";

type UnwantedKey = {
  descripe: string;
  detail: string;
  color: string;
};

type Props = Omit<Product, keyof UnwantedKey>;

const CardProduct: React.FC<Props> = ({ img, price, title }) => {
  const [isLoad , updateImgLoading] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img[0]} alt={title} className={styles.showImg}/>
        <img src={img[1]} alt={title} className={styles.hoverImg}/>
      </div>
      <h2 className={styles.title}>{title }</h2>

      <p className={styles.price}>${price }</p>
    </div>
  );
};

export default CardProduct;
