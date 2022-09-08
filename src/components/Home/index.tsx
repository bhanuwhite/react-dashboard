import Header from "../Header";
import Sidebar from "../Sidebar";
import SidebarRoutes from "../SidebarRoutes";
import  styles from "./Home.module.scss";

const Home = () => {
  return(
    <div>
      <Header />
      <div className={styles.content}>
      <Sidebar />
      <div className={styles.dashboard_content}>
      <SidebarRoutes />
      </div>
      </div>
    </div>
  )
}

export default Home;