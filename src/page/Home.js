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
          <img src={MedalImageFront} alt="개발" />
        </div>
        <div className="back">
          <img src={MedalImageBack} alt="배드민턴" />
        </div>
      </div>
    </div>
  );
};

export default Home;
