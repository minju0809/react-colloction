import { useState } from "react";
import Home from "../src/component/Home";
import Page1 from "../src/component/page1";
import Page2 from "../src/component/page2";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      {page === 0 && (
        <div>
          <Home setPage={setPage} />
        </div>
      )}
      {page === 1 && (
        <div>
          <Page1 setPage={setPage} />
        </div>
      )}
      {page === 2 && (
        <div>
          <Page2 setPage={setPage} />
        </div>
      )}
    </div>
  );
}

export default App;
