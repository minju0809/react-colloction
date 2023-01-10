import { useState } from "react";
import movieList from "../component/json/MovieData";

const FindMovie = ({ setPage }) => {
  const [findMovie, setFindMovie] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  const handleMovie = (e) => {
    setFindMovie(e.target.value);
  };

  const handleAdd = () => {
    setSearchMovies(
      movieList.filter((movie) => movie.name.includes(findMovie))
    );
  };

  return (
    <div className="findMovie">
      <button className="btn" onClick={() => setPage(0)}>
        Home
      </button>
      <h2>FindMovie</h2>
      <input
        placeholder="영화 이름 입력"
        value={findMovie}
        onChange={handleMovie}
      ></input>
      <button className="btn" onClick={handleAdd}>
        검색
      </button>
      <div>
        {searchMovies.length > 0
          ? searchMovies.map((movie, id) => (
              <div
                className="result"
                key={id}
                onClick={() => window.open(movie.link)}
              >
                {movie.name}
              </div>
            ))
          : movieList.map((movie, id) => (
              <div
                className="result"
                key={id}
                onClick={() => window.open(movie.link)}
              >
                {movie.name}
              </div>
            ))}
      </div>
    </div>
  );
};

export default FindMovie;
