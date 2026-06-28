import styles from "./PlaylistCard.module.css";
import { FaPlay } from "react-icons/fa";

function PlaylistCard({ title, description, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <button className={styles.playButton}>
          <FaPlay />
        </button>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default PlaylistCard;