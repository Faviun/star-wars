import fixer from "../../../../img/fixer.jpg"
import { cloneFixer } from "../../../../utils/constants";
import styles from "../../../../styles/allChampion.module.css"

export const Fixer = () => {
  return (
    <main>
        <img className={styles.img} src={fixer} alt="3/4" />
        <p className={styles.line}>{cloneFixer}</p>
    </main>
  );
};
