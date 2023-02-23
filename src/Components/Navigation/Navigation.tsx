import styles from "./Nav.module.scss";
import { Link, Outlet } from "react-router-dom";
import React from "react";

interface Props {
  toggle: () => void;
  updateCartActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="logo">
        <Link to="/">
          <img src="/icon/logo.png" alt="" />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.menu} onClick={() => props.toggle()}></div>

        <div
          className={styles.cart}
          onClick={(e) => {
            props.updateCartActive(true);
          }}
        >
          <img src="/icon/icon-bag.png" alt="" />
        </div>

        <ul className={styles.left}>
          <li className={styles.children}>
            {" "}
            <Link to="/shop">Shop</Link>
          </li>
          <li className={styles.children}>
            <Link to="/pres">Press</Link>
          </li>
          <li className={styles.children}>
            <Link to="/story">Story</Link>
          </li>
          <li className={styles.children}>
            <Link to="/collections">Collections</Link>
          </li>
          <li className={styles.children}>Contact</li>
        </ul>
        <ul className={styles.right}>
          <li className={styles.children}>
            <img src="/icon/icon-search.png" alt="" />
          </li>
          <li
            className={styles.children}
            onClick={() => props.updateCartActive(true)}
          >
            <img src="/icon/icon-bag.png" alt="" />
          </li>
          <ul className={styles.reverse}>
            <li className={styles.children}>Social</li>
          </ul>
        </ul>
      </div>

      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
