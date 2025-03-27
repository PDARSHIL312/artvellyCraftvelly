import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MainLayout from "./layouts/MainLayout";
import Aboutus from "./pages/Aboutus";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
