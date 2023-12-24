import React from "react";
import MoviesList from "../components/MoviesList.jsx";
import Preloader from "../components/Preloader.jsx";
import {Search} from "../components/Search.jsx";

class Main extends React.Component{
    state= {
        movies: [],
    }

    componentDidMount(){
        fetch("http://www.omdbapi.com/?apikey=8dc5c654&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    searchMovie = (word, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=8dc5c654&s=${word}${type !=="all" ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }


    render(){
        const {movies} = this.state;

        return(
            <div className="container content">
                <Search searchMovie={this.searchMovie}/>
                {
                    movies.length
                        ? <MoviesList movies={this.state.movies}/>
                        : <Preloader />
                }

            </div>
        )
    }

}

export default Main;