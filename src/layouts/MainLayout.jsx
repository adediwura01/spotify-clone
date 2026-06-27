import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
function MainLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <div className={styles.mainSection}>
        <header className={styles.header}>
          <Header />
        </header>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>

      <footer className={styles.player}>
        Player
      </footer>
    </div>
  );
}

export default MainLayout;