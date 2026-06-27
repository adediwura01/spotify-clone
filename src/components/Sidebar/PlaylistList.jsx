import styles from "./Sidebar.module.css";



const playlists = [
  "Today's Top Hits",
  "Coding Session",
  "Afrobeats Mix",
  "Late Night Drive",
  "Chill Vibes",
  "Workout Mix",
  "Focus Mode",
  "Throwbacks",
];

function PlaylistList() {
  return (
    
    <section className={styles.playlists}>
      <h4 className={styles.playlistHeading}>
    Playlists
  </h4>
      {playlists.map((playlist) => (
        <button
          key={playlist}
          className={styles.playlistItem}
        >
          {playlist}
        </button>
      ))}
    </section>

  );
}

export default PlaylistList;