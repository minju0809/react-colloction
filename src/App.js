import Navbar from "./component/Navbar";
import Home from "./page/Home";
import FindGym from "./page/findGym";
import Page2 from "./page/page2";
import Footer from "../src/component/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Navbar setPage={setPage} />
      <div className="contents">
        {page === 0 && <Home />}
        {page === 1 && <FindGym />}
        {page === 2 && <Page2 />}
      </div>
      <Footer className="footer" />
    </>
  );
}

export default App;
