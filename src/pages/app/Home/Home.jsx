import Hero from "../../../components/Home/Hero/Hero";
import Section from "../../../components/Home/Section/Section";
import {quickPicks, madeForYou, trendingNow, recentlyPlayed} from "../../../data/playlists";
function Home() {
  return (
    <>
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
        title="Trending now"
        playlists={trendingNow}
      />
    </>
  );
}

export default Home;