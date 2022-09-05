import { Routes, Route } from "react-router-dom";
import Sidebarview from "../../pages/SidebarView";

const SidebarRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" >
          <Route path="/dashboard" element={<Sidebarview />} />
        </Route>
      </Routes>
    </div>
  );
};

export default SidebarRoutes;