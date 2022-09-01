import { Link } from "react-router-dom";
import styles from  './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_item}>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Sidebar;