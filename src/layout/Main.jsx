import React, {useState, useEffect} from "react";
import MoviesList from "../components/MoviesList.jsx";
import Preloader from "../components/Preloader.jsx";
import Search from "../components/Search.jsx";


//use your api key for OMBDapi.com
//env local
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;


export default function Main(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    function searchMovie (word, type = "all"){
        setLoading(false);
        fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${word}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false);
                setMovies(data.Search);
            })
            .catch((error) => {
                console.log("error: ", error);
                setLoading(false);
            });
    }


    //componentDidMount
    useEffect(()=> {
        fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=christmas`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setMovies(data.Search);
            })
            .catch((error) => {
                console.log("error: ", error);
                setLoading(false);
            });
    }, []);

    return(
        <div className="container content">
            <Search searchMovie={searchMovie}/>
                {
                    // movies.length
                    loading
                        ? <Preloader />
                        : <MoviesList movies={movies}/>
                }
            </div>
    );

}