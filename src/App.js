import Header from "./components/header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

   <div>
    <Header/>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>

   </div>

  );
}

export default App;
