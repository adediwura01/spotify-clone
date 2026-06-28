import styles from "./Player.module.css";

import {
  HiOutlineQueueList,
  HiSpeakerWave,
} from "react-icons/hi2";

import { MdDevices } from "react-icons/md";

import { BsFullscreen } from "react-icons/bs";

function ExtraControls() {
  return (
    <section className={styles.extraControls}>
      <button className={styles.controlButton}>
        <HiOutlineQueueList />
      </button>

      <button className={styles.controlButton}>
        <MdDevices />
      </button>

      <div className={styles.volumeContainer}>
        <HiSpeakerWave className={styles.volumeIcon} />

        <input
          type="range"
          min="0"
          max="100"
          value="75"
          readOnly
          className={styles.volumeSlider}
        />
      </div>

      <button className={styles.controlButton}>
        <BsFullscreen />
      </button>
    </section>
  );
}

export default ExtraControls;