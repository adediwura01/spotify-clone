import styles from "./Hero.module.css";
import HeroContent from "./HeroContent";
import topHits from "../../../assets/images/playlists/top-hits.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={topHits}
        alt=""
        className={styles.background}
      />
      <div className={styles.heroGlow}></div>

      <div className={styles.overlay}></div>

      <div className={styles.heroPanel} 
      >
        <HeroContent />
      </div>

    </section>
  );
}

export default Hero;