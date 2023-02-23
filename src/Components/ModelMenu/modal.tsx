import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import styles from "./model.module.scss";

type Props = {
  isActive : boolean,
  updateActive : React.Dispatch<boolean>
}

const MenuOverlay: React.FC<Props> = (props) => {
  const JSX: React.ReactNode = (
    <>
      <div  className={props.isActive ? `${styles.active} ${styles.container}`: styles.container  }>
        <ul className={styles.menu} onClick={() => props.updateActive(false)}>
          <li className={styles.children}><Link to='/shop'>Shop</Link></li>
          <li className={styles.children}><Link to='/story'>Story</Link></li>
          <li className={styles.children}><Link to='/press'>Press</Link></li>
          <li className={styles.children}><Link to='/collections'>Collections</Link></li>
          <li className={styles.children}><Link to='/contact'>Contact</Link></li>
          <li className={styles.children}><Link to='/search'>Search</Link></li>
          {/* <li className={styles.children}></li> */}
        </ul>

        <div className={styles.social}>
          <div className={styles.fb}></div>
          <div className={styles.ig}></div>
          <div className={styles.tw}></div>
        </div>
      </div>

    </>
  );

  return ReactDOM.createPortal(
    JSX,
    document.getElementById("overlay") as Element
  );
};

export default MenuOverlay;
