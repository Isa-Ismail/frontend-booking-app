import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home"
import Hotel from "./pages/hotels/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/list" element = {<List />} />
        <Route path="/hotels" element = {<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
