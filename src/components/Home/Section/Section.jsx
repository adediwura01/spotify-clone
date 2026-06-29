import styles from "./Section.module.css";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import { motion } from "framer-motion";
import { sectionVariants,} from "../../../animations";

function Section({ title, playlists }) {
  return (
    <motion.section className={styles.section}  variants={sectionVariants}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button className={styles.showAll}>
          Show all
        </button>
      </div>

      <div className={styles.grid}>
        {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          playlist={playlist}
        />
))}
      </div>
    </motion.section>
  );
}

export default Section;