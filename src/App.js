import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Care } from "./components/pages/Care";
import { Contact } from "./components/pages/Contact";
import { Donate } from "./components/pages/Donate";
import {Volunteer} from "./components/pages/Volunteer"
import {Adopt} from "./components/pages/Adopt"



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/care" element={<Care/>} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/donate" element={<Donate/>} />
            <Route  path="/volunteer" element={<Volunteer/>} />
            <Route  path="/adopt" element={<Adopt/>} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;