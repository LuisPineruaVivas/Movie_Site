import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImage } from "../utils/getMovieImage";
import "../pages/MovieDetails.css"
export function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setGeneros(data.genres[0])})
    }, [movieId])
    const imageUrl = getMovieImage(movie.poster_path, 300)
    return(
        <div className="detailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage"/>
            <div className="col movieDetails">
                <p className="title">
                    <strong>Title:</strong>{movie.title}
                </p>
                <p>
                    <strong>Genre: </strong> {generos.name}
                </p>
                <p>
                    <strong>Description: </strong> {movie.overview}
                </p>
            </div>
        </div>
    )
}