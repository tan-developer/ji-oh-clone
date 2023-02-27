import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <div className={styles.container__title}>General</div>
        <div className={styles.container__link}>
          <a href="">info@jiohny.com</a>
        </div>
      </div>

      <div className={styles.container__item}>
        <div className={styles.container__title}>E-SHOP</div>
        <div className={styles.container__link}>
          <a href="">shop@jiohny.com</a>
        </div>
      </div>

      <div className={styles.container__item}>
        <div className={styles.container__title}>PRESS</div>
        <div className={styles.container__link}>
          <a href="">press@jiohny.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
