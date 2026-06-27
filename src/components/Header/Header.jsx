import styles from "./Header.module.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiBell,
} from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.navButton}>
          <FiChevronLeft />
        </button>

        <button className={styles.navButton}>
          <FiChevronRight />
        </button>
      </div>

      <div className={styles.searchBar}>
        <IoSearch />

        <input
          type="text"
          placeholder="What do you want to play?"
        />
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton}>
          <FiBell />
        </button>

        <button className={styles.profileButton}>
          <FaRegUserCircle />
        </button>
      </div>
    </header>
  );
}

export default Header;