import { useState } from "react";
import movieList from "../component/json/MovieData";

const SelectMovie = () => {
  const [selectGenre, setSelectGenre] = useState("");
  const genres = [
    "장르",
    "액션",
    "멜로",
    "코미디",
    "로맨틱 코미디",
    "모험",
    "공상과학",
    "판타지",
    "다크 판타지",
    "드라마",
    "청춘",
    "탐정",
    "전쟁",
    "공포",
    "미스터리",
    "스릴러",
    "느와르",
    "갱스터",
    "서부극",
    "가톨릭",
    "피카레스크",
  ];

  const filterMovie = () => {
    const filtered = movieList.filter((info) => {
      return info.genre.includes(selectGenre);
    });
    console.log(filtered);
    if (filtered) {
      return filtered.map((info, i) => <div key={i}>{info.name}</div>);
    }
  };

  const onSelect = (e) => {
    console.log(e.target.value);
    setSelectGenre(e.target.value);
  };

  return (
    <div className="selectMovie">
      <h2>SelectMovie</h2>
      <select onChange={onSelect}>
        {genres.map((genre, i) => (
          <option key={i}>{genre}</option>
        ))}
      </select>
      {selectGenre ? (
        <div>{filterMovie()}</div>
      ) : (
        <div>
          {movieList.map((movie, i) => (
            <div key={i}>{movie.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMovie;
