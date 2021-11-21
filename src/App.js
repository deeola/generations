import "../src/scss/style.css";
import Home from "./components/home/Home";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Forgot from "./components/registration/Forgot";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Errorpage from "./components/error/Errorpage";
import Showcase from "./components/showcase/Showcase";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/errorpage" element={<Errorpage />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
