import ReactDOM from "react-dom";
import { Post } from "../../Interface/interface";
import styles from "./PressOverlay.module.scss";

interface Props {
  post: Post | undefined;
  setPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
}
const PressOverlay: React.FC<Props> = ({ post, setPost }) => {
  const JSX = (
    <section
      className={
        post ? `${styles.container} ${styles.active}` : `${styles.container}`
      }
    >
      <div className={styles.container__button}>
        <a href="#" onClick={() => setPost(undefined)}>
          <img src="/icon/close.png" alt="Close" />
        </a>
      </div>
      <div className={styles.container__date}>{post?.date}</div>
      <div className={styles.container__source}>{post?.source}</div>
      <div className={styles.container__content}>
        <img src={post?.content} alt="" />
      </div>
    </section>
  );
  return ReactDOM.createPortal(JSX, document.getElementById("overlay")!);
};

export default PressOverlay;
