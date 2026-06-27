import styles from "./LikedSongs.module.css";
import { MdFavorite } from "react-icons/md";

function LikedSongs() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.iconBox}>
          <MdFavorite />
        </div>

        <div>
          <p className={styles.smallText}>Playlist</p>
          <h1>Liked Songs</h1>
          <p className={styles.description}>
            Your favourite songs will appear here once you connect to Spotify.
          </p>
        </div>
      </div>

      <div className={styles.emptyState}>
        <h2>No liked songs yet</h2>

        <p>
          Log in with Spotify to automatically load your liked songs and
          listening history.
        </p>
      </div>
    </section>
  );
}

export default LikedSongs;