import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
