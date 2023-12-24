import React from "react";
import {Button, Card} from "react-bootstrap";

export default function Movie(props){
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return(
        <div id={id} className="movie">
            <Card style={{ width: '16rem' }}>
                {
                    poster === "N/A"
                        ? <Card.Img variant="top" src={`https://placehold.co/200x250?text=${title}`} />
                        : <Card.Img className="moviePoster" variant="top" src={poster} />
                }

                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text>
                        Год: {year}, жaнр: {type}
                    </Card.Text>
                    <Button variant="primary">Перейти</Button>
                </Card.Body>
            </Card>
        </div>
    )
}