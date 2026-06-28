import styles from "./Player.module.css";
import SongInfo from "./SongInfo";
import PlaybackControls from "./PlaybackControls";
import ExtraControls from "./ExtraControls";
import { usePlayer } from "../../context/PlayerContext";

function Player() {
    const { currentSong } = usePlayer();
  return (
    <div className={styles.player}>
      <SongInfo
  title={currentSong.title}
  artist={currentSong.artist}
  cover={currentSong.image}
/>

      <div className={styles.center}>
        <PlaybackControls/>
      </div>

      <div className={styles.right}>
        <ExtraControls/>
      </div>
    </div>
  );
}

export default Player;