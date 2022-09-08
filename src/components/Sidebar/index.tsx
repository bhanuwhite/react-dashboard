import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
  ];

  return (
    <div className={styles.container}>
      <div
        style={{ width: sidebar ? "200px" : "50px" }}
        className={styles.sidebar}
      >
        <div className={styles.top_section}>
          <h1
            style={{ display: sidebar ? "block" : "none" }}
            className={styles.logo}
          >
            Sidebar
          </h1>
          <div
            style={{ marginLeft: sidebar ? "50px" : "0px" }}
            className={styles.bars}
          >
            <AiOutlineMenu onClick={toggleSidebar} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link to={item.path} key={index} className={styles.link}>
            <div className={styles.icon}>{item.icon}</div>
            <div
              className={styles.link_text}
              style={{ display: sidebar ? "block" : "none" }}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
