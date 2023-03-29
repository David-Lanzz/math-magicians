import Calculator from '../components/Calculator';
import styles from '../components/styles/Calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.body}>
    <h3>Let&#39;s do some Math!</h3>
    <Calculator />
  </div>
);
export default CalculatorPage;
