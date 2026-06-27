import styles from "./Header.module.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiBell,
} from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.navButton} onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </button>

        <button className={styles.navButton} onClick={() => navigate(1)}>
          <FiChevronRight />
        </button>
      </div>

      <div className={styles.searchBar}>
        <IoSearch />

        <input
          type="text"
          placeholder="What do you want to play?"
          aria-label="Search music"
        />
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton}>
          <FiBell />
        </button>

        <button className={styles.profileButton}>
          <span>A</span>
        </button>
      </div>
    </header>
  );
}

export default Header;