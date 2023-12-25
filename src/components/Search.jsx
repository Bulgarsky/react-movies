import React, {useState} from "react";
import {Button, InputGroup, Form} from "react-bootstrap";

export default function Search(props){
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const {
        searchMovie = Function.prototype,

    } = props;


    function handleChange(event){
        setSearch(event.target.value);
    }

    function handleKeyDown(event){
        //проверка: при нажатии на клавишу Enter
        if(event.key === "Enter"){
            //вызвать searchMovie из пропсов(передать значение поля поиска и жанр)
           searchMovie(search, type);
        }
    }

   function handleClick(){
        //вызвать searchMovie из пропсов(передать значение поля поиска)
        searchMovie(search, type);
    }

   function handleFilter(event){
        //меняем стейт
        setType(event.target.dataset.type);
        searchMovie(search, event.target.dataset.type);
    }


        return(
            <>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search a movie on OMDB"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        className="search"
                        type="search"
                        value={search}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={handleClick}>
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
                    onChange={handleFilter}
                    checked={type === "all"}
                />
                <Form.Check
                    inline
                    label="movies"
                    name="genre"
                    type="radio"
                    data-type="movie"
                    onChange={handleFilter}
                    checked={type === "movie"}
                />
                <Form.Check
                    inline
                    label="series"
                    name="genre"
                    type="radio"
                    data-type="series"
                    onChange={handleFilter}
                    checked={type === "series"}
                />
                <Form.Check
                    inline
                    label="games"
                    name="genre"
                    type="radio"
                    data-type="game"
                    onChange={handleFilter}
                    checked={type === "game"}
                />
                </InputGroup>
                <br />
                <br />
            </>
        )
}

export {Search};