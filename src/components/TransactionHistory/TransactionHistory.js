import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td className={styles.type}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
