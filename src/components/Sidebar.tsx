import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Sidebar;
