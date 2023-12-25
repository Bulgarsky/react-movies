import React from "react";
import {Button, InputGroup, Form} from "react-bootstrap";

class Search extends React.Component{

    state = {
        search: "",
        type: "all",
    }

    handleChange = (event) => {
        this.setState({search: event.target.value});
    }

    handleKeyDown = (event) => {
        //проверка: при нажатии на клавишу Enter
        if(event.key === "Enter"){
            //вызвать searchMovie из пропсов(передать значение поля поиска и жанр)
           this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    handleClick = () => {
        //вызвать searchMovie из пропсов(передать значение поля поиска)
        this.props.searchMovie(this.state.search, this.state.type);
    }

    handleFilter = (event) => {
        //меняем стейт
        this.setState(
            () => ({type: event.target.dataset.type}),
            () => {
                //вызываем метод
                this.props.searchMovie(this.state.search, this.state.type);
            }
        );


    }


    render(){

        return(
            <>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search a movie on OMDB"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        className="search"
                        type="search"
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={this.handleClick}>
                        Search
                    </Button>
                </InputGroup>

                <InputGroup>
                <Form.Check
                    inline
                    label="all"
                    name="genre"
                    type="radio"
                    data-type="all"
                    onChange={this.handleFilter}
                    checked={this.state.type === "all"}
                />
                <Form.Check
                    inline
                    label="movies"
                    name="genre"
                    type="radio"
                    data-type="movie"
                    onChange={this.handleFilter}
                    checked={this.state.type === "movie"}
                />
                <Form.Check
                    inline
                    label="series"
                    name="genre"
                    type="radio"
                    data-type="series"
                    onChange={this.handleFilter}
                    checked={this.state.type === "series"}
                />
                <Form.Check
                    inline
                    label="games"
                    name="genre"
                    type="radio"
                    data-type="game"
                    onChange={this.handleFilter}
                    checked={this.state.type === "game"}
                />
                </InputGroup>
                <br />
                <br />
            </>
        )
    }
}

export {Search};