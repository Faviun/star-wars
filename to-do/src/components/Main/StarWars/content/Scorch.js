import scorch from "../../../../img/scorch.jpg"
import { cloneScorch } from "../../../../utils/constants";
import styles from "../../../../styles/allChampion.module.css"

export const Scorch = () => {
  return (
    <main>
        <img className={styles.img} src={scorch} alt="2/4" />
        <p className={styles.line}>{cloneScorch}</p>
    </main>
  );
};
