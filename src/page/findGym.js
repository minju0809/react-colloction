import { useState } from "react";
import gymList from "../component/json/GymData";

const FindGym = ({ setPage }) => {
  const [chapter, setChapter] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [value, setValue] = useState("");
  console.log(gymList);

  return (
    <div className="findGym">
      {chapter === 0 && (
        <>
          <button className="btn" onClick={() => setPage(0)}>
            Home
          </button>
          <button
            className="btn"
            onClick={() => {
              setChapter(1);
            }}
          >
            모든 체육관
          </button>
          <button
            className="btn"
            onClick={() => {
              setChapter(2);
            }}
          >
            체육관 검색
          </button>
        </>
      )}

      {chapter === 1 && (
        <>
          <button
            className="btn"
            onClick={() => {
              setChapter(0);
            }}
          >
            이전으로
          </button>
          <ul className="gymAll">
            {gymList.map((gym, id) => (
              <li
                key={id}
                className="gymLink"
                onClick={() => window.open(gym.link)}
              >
                {gym.name}
              </li>
            ))}
          </ul>
        </>
      )}
      {chapter === 2 && (
        <>
          <button
            className="btn"
            onClick={() => {
              setChapter(0);
            }}
          >
            이전으로
          </button>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="체육관 이름을 입력해주세요."
          ></input>
          <button
            className="btn"
            onClick={() => {
              setSearchResult(
                gymList.filter((gym) => gym.name.includes(value))
              );
            }}
          >
            검색
          </button>
          {searchResult.length > 0 &&
            searchResult.map((result, idx) => (
              <div
                className="gymLink"
                key={idx}
                onClick={() => window.open(result.link)}
              >
                {result.name}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FindGym;
