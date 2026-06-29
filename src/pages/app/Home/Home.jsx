import Hero from "../../../components/Home/Hero/Hero";
import Section from "../../../components/Home/Section/Section";
import {quickPicks, madeForYou, trendingNow, recentlyPlayed} from "../../../data/playlists";
import { motion } from "framer-motion";
import {pageVariants,} from "../../../animations";
function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
    animate="visible"
    >
      <Hero />

      <Section
        title="Quick Picks"
        playlists={quickPicks}
      />
      
      <Section
        title="Made For You"
        playlists={madeForYou}
      />

      <Section
        title="Recently Played"
        playlists={recentlyPlayed}
      />
      <Section
        title="Trending Now"
        playlists={trendingNow}
      />
    </motion.main>
  );
}

export default Home;