import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import SidebarContent from "./components/SidebarContent";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SidebarContent />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
