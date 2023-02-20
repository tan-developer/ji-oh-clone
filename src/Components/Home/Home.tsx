import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

const Home : React.FC = () => {
  return <div className={styles.container}>
    <Link to="/shop"><h1>Shop Now</h1></Link>
  </div>
}

export default Home