import Header from "./components/header";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

   <div>
    <Header/>
  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>

   </div>

  );
}

export default App;
