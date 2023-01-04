import styles from "./styles.module.css";
import TurnBlock from "../TurnBlock";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Ход торгов{" "}
        <span>Торговые торги на аппарат ЛОТОС №2233445 (05/12/2022 07:00)</span>
      </div>
      <hr className={styles.hr}></hr>
      <div>
        <span className={styles.reminder}>
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице:
        </span>
      </div>
      <TurnBlock />
    </div>
  );
}
