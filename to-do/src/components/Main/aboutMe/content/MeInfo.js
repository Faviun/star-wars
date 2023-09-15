import { textCaminoInfo } from "../../../../utils/constants";
import styles from "../../../../styles/kamino.module.css";

export const MeInfo = () => {
    return (
      <section>
        <p className={styles.kaminoText}>{textCaminoInfo}</p>
      </section>
    );
};