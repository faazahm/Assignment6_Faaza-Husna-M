import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/moviesSlice";
import Search from "./components/Search";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies("avengers")); // Default search
  }, [dispatch]);

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div>
      <div className="orange-container">
        <h1 className="app">MoviesApp</h1>
        <div className="search-button">
          <Search />
        </div>
      </div>
      <h2 className="your">Your Favorite Movies</h2>
      <div>
        {favorites.map((fav) => (
          <div key={fav.imdbID}>
            <h3>{fav.Title}</h3>
            <img src={fav.Poster} alt={fav.Title} style={{ width: "100px" }} />
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Movie movies={movies} addToFavorites={addToFavorites} />
    </div>
  );
};

export default App;
