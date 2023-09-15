import boss from "../../../../img/boss.jpg"
import { cloneBoss } from "../../../../utils/constants";
import styles from "../../../../styles/allChampion.module.css"

export const Boos = () => {
  return (
    <main>
        <img className={styles.img} src={boss} alt="1/4" />
        <p className={styles.line}>{cloneBoss}</p>
    </main>
  );
};
