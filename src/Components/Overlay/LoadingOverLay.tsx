import ReactDOM from "react-dom";
import styles from './LoadingOverLay.module.scss'

const LoadingOverLay : React.FC = () => {
  const JSX : React.ReactNode = <span className={styles.cricle}></span>

  return ReactDOM.createPortal(
    JSX,
    document.getElementById("animation") as Element
  );
}

export default LoadingOverLay