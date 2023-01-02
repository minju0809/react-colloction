import Navbar from "./component/Navbar";
import Home from "./page/Home";
import FindGym from "./page/FindGym";
import TodoList from "./page/TodoList";
import Footer from "./component/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Navbar setPage={setPage} />
      <div className="contents">
        {page === 0 && <Home setPage={setPage} />}
        {page === 1 && <FindGym setPage={setPage} />}
        {page === 2 && <TodoList setPage={setPage} />}
      </div>
      <Footer className="footer" />
    </>
  );
}

export default App;
