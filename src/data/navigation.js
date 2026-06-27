import { IoHomeSharp, IoSearch } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

export const navigationItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: IoHomeSharp,
  },
  {
    id: 2,
    label: "Search",
    path: "/search",
    icon: IoSearch,
  },
   {
    id: 3,
    label: "Liked Songs",
    path: "/liked-songs",
    icon: MdFavorite,
  },
];