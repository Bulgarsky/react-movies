import Movie from "./Movie.jsx";

function MoviesList(props){
    //нач.массив пустой
    const {movies =[] } = props;

    return(
        <div className="moviesList">
            {
                movies.length
                    //если ничего не найдено апи возвращает Error, для этого нач.массив задан пустым
                    ? (movies.map(movie => (
                        <Movie
                            key={movie.imdbID}
                            {...movie}
                        />)))
                    :  <h3>Ничего не найдено ! </h3>
            }
        </div>
    )
}

export default MoviesList;