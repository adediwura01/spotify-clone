import styles from "./Player.module.css";
import { usePlayer } from "../../context/PlayerContext";

import {
  IoPlay,
  IoPause,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from "react-icons/io5";

import {
  LuShuffle,
  LuRepeat2,
} from "react-icons/lu";

function PlaybackControls() {
    const { isPlaying, togglePlay } = usePlayer();
  return (
    <section className={styles.controls}>
      <div className={styles.buttonRow}>
        <button className={styles.controlButton}>
          <LuShuffle />
        </button>

        <button className={styles.controlButton}>
          <IoPlaySkipBack />
        </button>
        
        <button
           className={styles.playButton}
           onClick={togglePlay}
        >
            <span className={styles.playIcon}>
              {isPlaying ? <IoPause /> : <IoPlay />}
           </span>
        </button>

        <button className={styles.controlButton}>
          <IoPlaySkipForward />
        </button>

        <button className={styles.controlButton}>
          <LuRepeat2 />
        </button>
      </div>

      <div className={styles.progressRow}>
        <span>0:42</span>

        <input
          type="range"
          min="0"
          max="100"
          value="25"
          readOnly
          className={styles.progress}
        />

        <span>3:18</span>
      </div>
    </section>
  );
}

export default PlaybackControls;