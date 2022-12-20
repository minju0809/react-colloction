import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Page1 from "./page/page1";
import Page2 from "./page/page2";
import Footer from "../src/component/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" index element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
