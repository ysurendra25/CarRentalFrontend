import Navbar from "./Components/Navbar";
import Cars from "./Pages.jsx/Cars";
import Home from "./Pages.jsx/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LogIn from "./Pages.jsx/LogIn";
import Register from "./Pages.jsx/Register";


function App() {
    return (

        <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cars" element={<Cars/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;