import sev from "../../../../img/sev.jpg"
import { cloneSev } from "../../../../utils/constants";
import styles from "../../../../styles/allChampion.module.css"

export const Sev = () => {
  return (
    <main>
        <img className={styles.img} src={sev} alt="4/4" />
        <p className={styles.line}>{cloneSev}</p>
    </main>
  );
};
