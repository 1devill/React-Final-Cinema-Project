import React, { useState } from "react";
import { connect } from "react-redux";
import { Spin, Icon } from "antd";
import { MovieCard, Filter } from "../components";

const MainPage = ({ movies, genres, isLoading }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  if (isLoading) {
    return <Spin indicator={<Icon type="sync" style={{ fontSize: 35 }} spin />}/>
  }

  return (
    <React.Fragment>
        <Filter movies={movies} genres={genres} setFilteredMovies={setFilteredMovies} />
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
  genres: state.data.genres,
  isLoading: state.loading.isLoading
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);
