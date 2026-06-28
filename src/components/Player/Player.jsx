import styles from "./Player.module.css";
import SongInfo from "./SongInfo";
import PlaybackControls from "./PlaybackControls";

import topHits from "../../assets/images/playlists/top-hits.jpg";

function Player() {
  return (
    <div className={styles.player}>
      <SongInfo
        title="Today's Top Hits"
        artist="Spotify"
        cover={topHits}
      />

      <div className={styles.center}>
        <PlaybackControls/>
      </div>

      <div className={styles.right}>
        Extra Controls
      </div>
    </div>
  );
}

export default Player;