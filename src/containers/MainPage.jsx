import React, { useState } from "react";
import { connect } from "react-redux";
import { MovieCard, Filter } from "../components";

const MainPage = ({ movies, genres }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  return (
    <React.Fragment>
      <Filter
        movies={movies}
        genres={genres}
        setFilteredMovies={setFilteredMovies}
      />
      <div className={`card movie-card`}>
        {filteredMovies.length
          ? filteredMovies.map(item => (
              <MovieCard movie={item} key={item._id} />
            ))
          : movies.map(item => <MovieCard movie={item} key={item._id} />)}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  movies: state.data.movies,
  genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);
