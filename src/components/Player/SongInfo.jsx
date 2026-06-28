import styles from "./Player.module.css";
import { FiHeart } from "react-icons/fi";

function SongInfo({ title, artist, cover }) {
  return (
    <section className={styles.songInfo}>
      <img
        src={cover}
        alt={title}
        className={styles.cover}
      />

      <div className={styles.songDetails}>
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>

      <button
        className={styles.likeButton}
        aria-label="Like song"
      >
        <FiHeart />
      </button>
    </section>
  );
}

export default SongInfo;