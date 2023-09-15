import { ContactText } from "./ContactText";
import { HologramImg } from "./HologramImg";
import styles from "../../../../styles/contact.module.css";

export const ContactAll = () => {
  return (
    <div>
        <div className={styles.main}>
            <HologramImg />
            <ContactText />
        </div >
        <p className={styles.comment} >Добавлю оффлайн форму</p>
    </div>
  );
};
