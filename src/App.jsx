import React from "react";

import Header from "./Components/UI Components/Header/Header";
import Footer from "./Components/UI Components/Footer/Footer";

import Home1 from "./Components/Home1/Home1";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";
import Contact from "./Components/Contact/Contact";

import { ScrollToTop } from "./ScrollToTop";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/home1" element={<Home1 />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
