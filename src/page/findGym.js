import { useState } from "react";
import gymList from "../component/json/GymData";

const FindGym = () => {
  const [page, setPage] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [value, setValue] = useState("");
  console.log(gymList);

  return (
    <div className="findGym">
      {page === 0 && (
        <>
          <button
            onClick={() => {
              setPage(1);
            }}
          >
            모든 체육관
          </button>
          <button
            onClick={() => {
              setPage(2);
            }}
          >
            체육관 검색
          </button>
        </>
      )}

      {page === 1 && (
        <>
          <button
            onClick={() => {
              setPage(0);
            }}
          >
            이전으로
          </button>
          <ul className="gymAll">
            {gymList.map((gym, id) => (
              <li key={id} className="gymLink" onClick={() => window.open(gym.link)}>
                {gym.name}
              </li>
            ))}
          </ul>
        </>
      )}
      {page === 2 && (
        <>
          <button
            onClick={() => {
              setPage(0);
            }}
          >
            이전으로
          </button>
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="체육관 이름을 입력해주세요."></input>
          <button
            onClick={() => {
              setSearchResult(gymList.filter((gym) => gym.name.includes(value)));
            }}
          >
            검색
          </button>
          {searchResult.length > 0 && searchResult.map((result, idx) => <div className="gymLink" key={idx} onClick={() => window.open(result.link)}>{result.name}</div>)}
        </>
      )}
    </div>
  );
};

export default FindGym;
