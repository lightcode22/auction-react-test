import styles from "./styles.module.css";
import Timer from "../Timer";

export default function TurnBlock() {
  return (
    <div className={styles.turnBlock}>
      <span>Ход</span>
      <Timer />
    </div>
  );
}
