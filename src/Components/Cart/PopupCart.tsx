import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./PopupCart.module.scss";

interface Props {
  isCartActive: boolean;
  updateHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupCart: React.FC<Props> = ({ isCartActive, updateHover }) => {
  const { product } = useContext(CartContext);
  const className: string = `${styles.container} ${
    isCartActive ? `${styles.active}` : ``
  }`;

  return (
    <div className={className}>
      <div className={styles.title}>
        <div className={styles.text}>Your Cart</div>
        <div className={styles.close}>
          <img
            src="./icon/close-white.png"
            alt=""
            onClick={() => updateHover(false)}
          />
        </div>
      </div>
      <div className={styles.product}>
        {product?.map((product, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <img src={product.img[0]} alt="" />
              </div>
              <div className={styles.infor}>
                <div className={styles.name}>{product.title}</div>
                <div className={styles.price}>
                  {product.amount} X ${product.price}
                </div>
                <div className={styles.remove}>
                  <img src="./icon/close-white.png" alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <span>Subtotal : </span>
        <span>
          ${product &&
            product.reduce(function (acc, val) {
              return acc + val.amount * val.price;
            }, 0)}
        </span>
      </div>
      <div className={styles.button}>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default PopupCart;
