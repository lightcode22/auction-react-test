import styles from "./styles.module.css";

const colors = ["blue", "red", "green"];

export default function MultilineCell({ data, prices }) {
  return (
    <>
      {data.map((item, index) => {
        const color = colors[index];
        return prices ? (
          <div className={`${styles[color]} ${styles.cell}`} key={item}>
            {item} руб.
          </div>
        ) : (
          <div key={item}>{item}</div>
        );
      })}
    </>
  );
}
