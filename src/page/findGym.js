import { useState } from "react";
import gymList from "../component/json/GymData";

const FindGym = ({ setPage }) => {
  const [findValue, setFindValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleValue = (e) => {
    setFindValue(e.target.value);
  };

  const handleAdd = () => {
    setSearchResult(gymList.filter((gym) => gym.name.includes(findValue)));
    setFindValue("");
  };

  return (
    <div className="findGym">
      <button className="btn" onClick={() => setPage(0)}>
        Home
      </button>
      <h2>FindGym</h2>
      <input
        placeholder="지역 or 체육관 이름"
        value={findValue}
        onChange={handleValue}
      ></input>
      <button className="btn" onClick={handleAdd}>
        검색
      </button>
      <div>
        {searchResult.length > 0
          ? searchResult.map((result, id) => (
              <div className="result" key={id} onClick={() => window.open(result.link)}>
                {result.name}
              </div>
            ))
          : gymList.map((gym, id) => (
              <div className="result" key={id} onClick={() => window.open(gym.link)}>
                {gym.name}
              </div>
            ))}
      </div>
    </div>
  );
};

export default FindGym;