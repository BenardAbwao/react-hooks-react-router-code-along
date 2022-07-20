import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import { Route , Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App