import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Books from "./components/BooksSlider/Books.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

// 🔹 Import your pages
import Login from "./pages/Login";
import Register from "./pages/Register";

const Home = ({ handleOrderPopup, orderPopup, setOrderPopup }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Services handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStore />
      <Books />
      <Testimonial />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      
      {/* Navbar always visible */}
      <Navbar handleOrderPopup={handleOrderPopup} />

      {/* 🔴 ROUTES START HERE */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Home
              handleOrderPopup={handleOrderPopup}
              orderPopup={orderPopup}
              setOrderPopup={setOrderPopup}
            />
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
