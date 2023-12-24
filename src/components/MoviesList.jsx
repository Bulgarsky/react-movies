import Movie from "./Movie.jsx";
import React from "react";

function MoviesList(props){

    const {movies} = props;

    return(
        <div className="moviesList">
            {movies.map(movie => (
                <Movie
                    key={movie.imdbID}
                    {...movie}
                />
            ))
            }
        </div>
    )
}

export default MoviesList;