import Links from './Links';
import styles from './styles/Header.module.css';

const Header = () => (
  <div className={styles.body}>
    <h1 className={styles.h1}>Math Magicians</h1>
    <Links />
  </div>
);
export default Header;
