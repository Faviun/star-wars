import { contactText } from "../../../../utils/constants";
import styles from "../../../../styles/contact.module.css";

export const ContactText = () => {
  return (
    <main>
      <p className={styles.text}>{contactText}</p>
    </main>
  );
};
