import { useState } from "react";
import movieList from "../component/json/MovieData";

const FindMovie = ({ setPage }) => {
  const [findMovie, setFindMovie] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

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

  const onSelect = (s) => {
    setSelectGenre(s.target.value);
  };

  const selectMovie = () => {
    const selectedMovie = movieList.filter((movie) => {
      return movie.genre.includes(selectGenre);
    });
    if (selectedMovie) {
      return selectedMovie.map((movie, id) => (
        <Result key={id} movie={movie} />
      ));
    }
  };

  const handleMovie = (e) => {
    setFindMovie(e.target.value);
  };

  const handleAdd = () => {
    setSearchMovies(
      movieList.filter((movie) => movie.name.includes(findMovie))
    );
  };

  const View = () => {
    // {
    //   selectGenre !== "" ? (
    //     <div>
    //       {searchMovies.map((movie, id) => (
    //         <Result key={id} movie={movie} />
    //       ))}
    //     </div>
    //   ) : findMovie !== "" ? (
    //     <div>{selectMovie()}</div>
    //   ) : (
    //     <div>
    //       {movieList.map((movie, id) => (
    //         <Result key={id} movie={movie} />
    //       ))}
    //     </div>
    //   );
    // }
    if (searchMovies.length > 0) {
      return searchMovies.map((movie, id) => <Result key={id} movie={movie} />);
    } else if (selectGenre.length > 0) {
      return <div>{selectMovie()}</div>;
    } else {
      return movieList.map((movie, id) => <Result key={id} movie={movie} />);
    }
  };

  const Result = ({ movie }) => {
    return (
      <div key={movie.id}>
        <h4 className="result" onClick={() => window.open(movie.link)}>
          {movie.name}
        </h4>
        장르: {movie.genre}
      </div>
    );
  };

  return (
    <div className="findMovie">
      <button className="btn" onClick={() => setPage(0)}>
        Home
      </button>
      <h2>FindMovie</h2>
      <select value={selectGenre} onChange={onSelect}>
        {genres.map((genre, i) => (
          <option key={i}>{genre}</option>
        ))}
      </select>
      <input
        placeholder="영화 이름 입력"
        value={findMovie}
        onChange={handleMovie}
      ></input>
      <button className="btn" onClick={handleAdd}>
        검색
      </button>
      <div>{View()}</div>
    </div>
  );
};

export default FindMovie;
