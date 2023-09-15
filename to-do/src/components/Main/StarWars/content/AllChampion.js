import { Boos } from "./Boss";
import styles from "../../../../styles/allChampion.module.css";
import { Scorch } from "./Scorch";
import { Fixer } from "./Fixer";
import { Sev } from "./Sev";

export const AllChampion = () => {
  return (
    <main>
        <h1 className={styles.h1}>Our best students</h1>
            <div className={styles.newClone}>
                <Boos />
                <Scorch />
                <Fixer />
                <Sev />
            </div>
    </main>
  );
};
