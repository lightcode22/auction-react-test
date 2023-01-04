import TableRow from "../TableRow";
import MultilineCell from "../MultilineCell";
import styles from "./styles.module.css";
import participants from "../mockData/participants.json";

export default function DataRow({ isEven, rowHeader, rowTag }) {
  const colorClass = isEven ? "even" : "odd";

  const data = participants.map((participant) => participant[rowTag] || "");

  return (
    <TableRow colorClass={colorClass}>
      <div className={`${styles.tableCell} ${styles.header}`}>{rowHeader}</div>
      {data.map((item, index) => (
        <div className={styles.tableCell} key={index}>
          {Array.isArray(item) ? <MultilineCell data={item} prices /> : item}
        </div>
      ))}
    </TableRow>
  );
}
