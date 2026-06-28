import styles from "./Section.module.css";
import PlaylistCard from "../PlaylistCard/PlaylistCard";

function Section({ title, playlists }) {
  return (
    <section className={styles.section}>
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
            title={playlist.title}
            description={playlist.description}
            image={playlist.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;