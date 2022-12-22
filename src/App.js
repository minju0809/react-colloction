import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import FindGym from "./page/findGym";
import Page2 from "./page/page2";
import Footer from "../src/component/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findGym" index element={<FindGym />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
