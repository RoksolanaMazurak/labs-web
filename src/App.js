import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import Cart from "./containers/Cart";
import Navigation from "./components/Navigation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
