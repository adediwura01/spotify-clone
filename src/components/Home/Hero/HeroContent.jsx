import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import styles from "./Hero.module.css";

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <p className={styles.greeting}>
        EDITOR'S PICKS
      </p>
      <h1 className={styles.heroTitle}>
        Today's <br />
        Top Hits
      </h1>
      <p className={styles.heroDescription}>
        The biggest songs in the world right now.
      </p>
      <p className={styles.heroMeta}>
        Spotify • 50 Songs • Updated Daily
      </p>
      <HeroButtons />
      <HeroStats />
    </div>
  );
}

export default HeroContent;
