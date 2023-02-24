import styles from './Footer.module.scss'

const Footer : React.FC = () => {
  return <footer>
    <div className={styles.copyright}>
      <h3>© 2023</h3>
      <h3>Site By</h3>
      <h3>Newsletter</h3>
    </div>
    <div className={styles.social}>
        <img src="/icon/social-fb.png" alt="Facebook" />
        <img src="/icon/social-in.png" alt="Instagram" />
        <img src="/icon/social-tw.png" alt="Twitter" />
    </div>
  </footer>

}

export default Footer