import styles from "./Hero.module.css";

import HeroContent from "./HeroContent";
import HeroArtwork from "./HeroArtwork";

function HeroCard() {
  return (
    <div className={styles.heroCard}>
      <HeroContent />
      <HeroArtwork />
    </div>
  );
}

export default HeroCard;