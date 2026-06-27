import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { navigationItems } from "../../data/navigation";

import Library from "./Library";
import PlaylistList from "./PlaylistList";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <FaSpotify className={styles.logoIcon} />
        <h2>Spotify</h2>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={styles.navList}>
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                >
                  <Icon className={styles.icon} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

<div className={styles.playlistContainer}>
    <Library />
    <PlaylistList />
</div>
    </aside>
  );
}

export default Sidebar;