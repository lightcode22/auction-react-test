import styles from "./styles.module.css";

export default function TableRow({ colorClass = "", children }) {
  return (
    <div className={`${styles.row} ${styles[colorClass]}`}>{children}</div>
  );
}
