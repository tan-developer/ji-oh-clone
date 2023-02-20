import styles from "./PopupCart.module.scss";

interface Props {
  isHover: boolean;
}

const PopupCart: React.FC<Props> = ({ isHover }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.text}>Your Cart</div>
        <div className={styles.close}>
          <img src="./icon/close-white.png" alt="" />
        </div>
      </div>
      <div className={styles.product}></div>
      <div className={styles.total}>
        <span>Subtotal : </span>
        <span>0$</span>
      </div>
      <div className={styles.button}>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default PopupCart;
