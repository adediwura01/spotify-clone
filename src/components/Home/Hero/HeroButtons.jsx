import styles from "./Hero.module.css";
import { FaPlay } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function HeroButtons() {
  return (
    <div className={styles.buttonRow}>
      <button className={styles.playButton}>
        <FaPlay />

        <span>Play</span>
      </button>

      <button className={styles.iconButton}>
        <FiHeart />
      </button>

      <button className={styles.iconButton}>
        <HiOutlineDotsHorizontal />
      </button>
    </div>
  );
}

export default HeroButtons;
