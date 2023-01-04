import TableRow from "../TableRow";
import MultilineCell from "../MultilineCell";
import participants from "../mockData/participants.json";
import styles from "./styles.module.css";

export default function TableHead() {
  return (
    <div className={styles.tableHead}>
      <TableRow>
        <div className={`${styles.staticHeader} ${styles.tableCell}`}>
          Параметры и требования
        </div>
        {participants.map((participant) => {
          const { name, company } = participant;

          return (
            <div className={styles.tableCell} key={participant.name}>
              <MultilineCell data={[name, company]} />
            </div>
          );
        })}
      </TableRow>
    </div>
  );
}
