import { createContext, useContext, useState } from "react";

import topHits from "../assets/images/playlists/top-hits.jpg";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState({
    id: 1,
    title: "Today's Top Hits",
    artist: "Spotify",
    image: topHits,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  function playSong(song) {
    setCurrentSong(song);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying((playing) => !playing);
  }

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}