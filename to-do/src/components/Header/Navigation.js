import { items } from "../../utils/constants";
import styles from "../../styles/header.module.css"

export const Navigation = ({ changePage }) => {
  return (
    // <nav className="fixed-top ml-4 mt-2 ">
    <nav>
      <ul className={styles.headerUl}>
        {items.map(({ text, id }) => (
          <li 
            onClick={() => changePage(id)}
            // className="btn-danger nav-item btn mx-1 border border-white "
            className={styles.headerNavigation}
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};
