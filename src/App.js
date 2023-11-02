// import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Subsidiaries from "./pages/Subsidiaries";
import ContactUs from "./pages/ContactUs";
import Location from "./pages/Location";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/subsidiaries" element={<Subsidiaries />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
