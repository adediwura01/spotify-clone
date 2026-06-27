import { HiOutlineLibrary } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import styles from "./Sidebar.module.css";

function Library() {
  return (
    <section className={styles.library}>
      <div className={styles.libraryHeader}>
        <div className={styles.libraryTitle}>
          <HiOutlineLibrary className={styles.icon} />
          <span>Your Library</span>
        </div>

        <button className={styles.addButton}>
          <IoAdd />
        </button>
      </div>

      <div className={styles.libraryActions}>
        <button className={styles.libraryItem}>
          <div className={styles.likedIcon}>
              <AiFillHeart />
            </div>
          <span>Liked Songs</span>
        </button>
      </div>
    </section>
  );
}

export default Library;