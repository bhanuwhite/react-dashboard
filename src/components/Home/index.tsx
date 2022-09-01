import Header from "../Header";
import Sidebar from "../Sidebar";
import SidebarRoutes from "../SidebarRoutes";
import "./Home.module.scss";

const Home = () => {
  return(
    <div>
      <Header />
      <Sidebar />
      <SidebarRoutes />
    </div>
  )
}

export default Home;