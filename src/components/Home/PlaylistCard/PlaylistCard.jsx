import styles from "./PlaylistCard.module.css";
import { FaPlay } from "react-icons/fa";
import { usePlayer } from "../../../context/PlayerContext";

function PlaylistCard({ playlist }) {
  const { playSong } = usePlayer();

  return (
    <article
      className={styles.card}
      onClick={() => playSong(playlist)}
    >
      <div className={styles.cover}>
        <img
          src={playlist.image}
          alt={playlist.title}
          className={styles.image}
        />

        <button className={styles.playButton}>
          <FaPlay />
        </button>
      </div>

      <h3>{playlist.title}</h3>

      <p>{playlist.description}</p>
    </article>
  );
}

export default PlaylistCard;