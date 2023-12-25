import React from "react";
import MoviesList from "../components/MoviesList.jsx";
import Preloader from "../components/Preloader.jsx";
import {Search} from "../components/Search.jsx";


//use your api key for OMBDapi.com
//env local
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;


class Main extends React.Component{
    state= {
        movies: [],
        loading: true,
    }


    componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=christmas`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((error) => {
                console.log("error: ", error);
                this.setState({loading: false});
            });
    }

    searchMovie = (word, type = "all") => {
        this.setState({ loading: true });
        fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${word}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((error) => {
                console.log("error: ", error);
                this.setState({loading: false});
            });
    }


    render(){
        const {movies, loading} = this.state;

        return(
            <div className="container content">
                <Search searchMovie={this.searchMovie}/>
                {
                    // movies.length
                    loading
                        ? <Preloader />
                        : <MoviesList movies={movies}/>
                }

            </div>
        )
    }

}

export default Main;