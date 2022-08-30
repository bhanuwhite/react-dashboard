import MainRoutes from "./Routes";
import "./style.css";
import Sidebar from "./components/Sidebar";

function App(): JSX.Element {
  return (
    <div className="app">
      <div className="header">
        <h2>My Dashboard App</h2>
      </div>
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
