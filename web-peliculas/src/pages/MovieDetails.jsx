import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImage } from "../utils/getMovieImage";
import "../pages/MovieDetails.css"
import { getMovieTrailer } from "../utils/getMovieTrailer";
export function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    useEffect(() => {
        get("/movie/" + movieId + "?language=es").then((data) => {
            setMovie(data);
            setGeneros(data.genres[0])})
    }, [movieId])
    
    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function fetchTrailer() {
            const trailerUrl = await getMovieTrailer(movieId);
            setTrailerUrl(trailerUrl);
        }
    
        fetchTrailer();
      }, []);
      console.log(movie)

    const imageUrl = getMovieImage(movie.poster_path, 300)
    return(
        <div>
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
            
            <div className="trailer">
            {trailerUrl ? (
                <iframe
                width="560"
                height="315"
                src={trailerUrl}
                title="Movie Trailer"
                allowFullScreen
                ></iframe>
            ) : (
                <p>Trailer not found</p>
            )}
            </div>
        </div>
    )
}