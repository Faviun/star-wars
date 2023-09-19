import { ContactText } from "./ContactText";
import { HologramImg } from "./HologramImg";
import styles from "../../../../styles/contact.module.css";
import { OfflineForm } from "./OfflineForm";

export const ContactAll = () => {
  return (
    <div>
        <div className={styles.main}>
            <HologramImg />
            <ContactText />
        </div >
        <OfflineForm />
    </div>
  );
};
