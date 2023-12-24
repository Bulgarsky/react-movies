import React from "react";
import MoviesList from "../components/MoviesList.jsx";

class Main extends React.Component{
    state= {
        movies: [],
    }

    componentDidMount(){
        fetch("http://www.omdbapi.com/?apikey=8dc5c654&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    render(){
        const {movies} = this.state;

        return(
            <div className="container content">
                {
                    movies.length ? <MoviesList movies={this.state.movies}/> : <h3>Loading... </h3>
                }

            </div>
        )
    }

}

export default Main;