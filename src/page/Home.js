import * as React from "react";
import MedalImageFront from "../images/developer.png";
import MedalImageBack from "../images/badminton.png";

const Home = () => {
  return (
    <div className="home">
      <div>home</div>
      <button className="btn">button</button>
      <div className="medal">
        <div className="front">
          <img src={MedalImageFront} alt="왜 안옴?" />
        </div>
        <div className="back">
          <img src={MedalImageBack} alt="왜 안와?" />
        </div>
      </div>
    </div>
  );
};

export default Home;
