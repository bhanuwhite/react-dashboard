import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import React, { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 200px;
  height: 90vh;
  background-color: lightskyblue;
  position: fixed;
  top: 10vh;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_item}>
        <IconContext.Provider value={{ color: "#000000" }}>
          <Link to="#" onClick={showSidebar}>
            <div className={styles.sidebar_icon}>
              <AiOutlineMenu />
            </div>
          </Link>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <Link to="#" onClick={showSidebar}>
                <div className={styles.sidebar_close}>
                  <AiOutlineClose />
                </div>
              </Link>
              <div className={styles.closebar_first_item }>
              <Link to="/dashboard" onClick={showSidebar}>Dashboard</Link>
              </div>
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Sidebar;
