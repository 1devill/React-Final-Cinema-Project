import React from "react";
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
    return (
        <div>
            <img className='movie-image' src={movie.poster} alt="movie-poster" />
            <Link to={`movie/${movie._id}`}>
                <h4 className="title movie-title">{movie.title}</h4>
                <div className="btn-container">
                    <div className="btn btn-primary">
                        <span>More Info</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};
