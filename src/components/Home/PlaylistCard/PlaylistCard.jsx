import styles from "./PlaylistCard.module.css";
import { FaPlay } from "react-icons/fa";
import { usePlayer } from "../../../context/PlayerContext";
import { motion } from "framer-motion";
import {cardVariants, playButtonVariants,} from "../../../animations";

function PlaylistCard({ playlist }) {
  const { playSong } = usePlayer();
  const { isPlaying, togglePlay } = usePlayer();

  return (
    <motion.article
     className={styles.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <div className={styles.cover}>
        <img
          src={playlist.image}
          alt={playlist.title}
          className={styles.image}
        />

        <motion.button className={styles.playButton}  
        variants={playButtonVariants}
        onClick={(e) => {
        e.stopPropagation();
        playSong(playlist);
        }}>
          <FaPlay />
        </motion.button>
      </div>

      <h3>{playlist.title}</h3>

      <p>{playlist.description}</p>
    </motion.article>
  );
}

export default PlaylistCard;