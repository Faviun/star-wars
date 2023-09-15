import hologramImg from "../../../../img/hologram.jpg";
import styles from "../../../../styles/contact.module.css";

export const HologramImg = () => {
  return (
    <section>
      <img className={styles.holoimg} src={hologramImg} alt="hologram img" />
    </section>
  );
};
