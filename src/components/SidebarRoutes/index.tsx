import { Routes, Route } from "react-router-dom";

import Dashboard from "../Dashboard";

const SidebarRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default SidebarRoutes;