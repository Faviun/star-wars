import kaminoMain from "../../../../img/kamino_main.png";
import styles from "../../../../styles/kamino.module.css";

export const KaminoMain = () => {
  return (
    <section>
      <img className={styles.kaminoMain} src={kaminoMain} alt="kamino main" />
    </section>
  );
};
