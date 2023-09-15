import { Navigation } from "./Navigation";
import styles from "../../styles/header.module.css"

export const Header = ({ changePage }) => {
  return (
    <header>
      <Navigation changePage={changePage} />
      <h1 className={styles.headerLine}></h1>
    </header>
  );
};
