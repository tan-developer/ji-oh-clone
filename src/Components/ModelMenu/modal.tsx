import React from "react";
import ReactDOM from "react-dom";

import styles from "./model.module.scss";

type Props = {
  isActive : boolean
}

const MenuOverlay: React.FC<Props> = (props) => {
  const JSX: React.ReactNode = (
    <>
      <div className={props.isActive ? `${styles.active}   ${styles.container}`: styles.container  }>
        <ul className={styles.menu}>
          <li className={styles.children}>Shop</li>
          <li className={styles.children}>Press</li>
          <li className={styles.children}>Story</li>
          <li className={styles.children}>Collections</li>
          <li className={styles.children}>Contact</li>
          <li className={styles.children}>Search</li>
          <li className={styles.children}></li>
        </ul>

        <div className={styles.social}>
          <div className={styles.fb}></div>
          <div className={styles.ig}></div>
          <div className={styles.tw}></div>
        </div>
      </div>

      <div className={styles.exit}></div>
    </>
  );

  return ReactDOM.createPortal(
    JSX,
    document.getElementById("overlay") as Element
  );
};

export default MenuOverlay;
