import topHits from "../assets/images/playlists/top-hits.jpg";
import coding from "../assets/images/playlists/coding-session.jpg";
import workout from "../assets/images/playlists/workout.jpg";
import afrobeats from "../assets/images/playlists/afrobeats.jpg";

const playlists = [
  {
    id: 1,
    title: "Today's Top Hits",
    description: "The biggest songs right now.",
    artist: "Spotify",
    image: topHits,
  },
  {
    id: 2,
    title: "Coding Session",
    description: "Focus while you build.",
    artist: "Spotify",
    image: coding,
  },
  {
    id: 3,
    title: "Workout Mix",
    description: "Push harder every day.",
    image: workout,
    artist: "Spotify",
  },
  {
    id: 4,
    title: "Afrobeats Mix",
    description: "Fresh vibes from Africa.",
    image: afrobeats,
    artist: "Spotify",
  },
];

export const quickPicks = playlists;

export const madeForYou = [...playlists].reverse();

export const recentlyPlayed = [
  playlists[2],
  playlists[0],
  playlists[3],
  playlists[1],
];

export const trendingNow = [
  playlists[1],
  playlists[3],
  playlists[0],
  playlists[2],
];