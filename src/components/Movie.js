import React from "react";

const Movie = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default Movie;
