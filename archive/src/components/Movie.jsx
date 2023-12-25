import {Button, Card} from "react-bootstrap";

export default function Movie(props){
    const {
        //alias props
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
                        ? <Card.Img variant="top" src={`https://placehold.co/250x250?text=${title}`} />
                        : <Card.Img className="moviePoster" variant="top" src={poster} />
                }

                <Card.Body>
                    <Card.Title style={{height: "75px"}}> {title} </Card.Title>
                    <Card.Text>
                        Год: {year}, жaнр: {type}
                    </Card.Text>
                    <Button variant="primary">Перейти</Button>
                </Card.Body>
            </Card>
        </div>
    )
}