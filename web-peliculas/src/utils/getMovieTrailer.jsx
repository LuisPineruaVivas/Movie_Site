const API = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;;
export async function getMovieTrailer(movieId){
    const response = await fetch(`${API}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    const trailers = data.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
    if (trailers.length > 0) {
        console.log(`https://www.youtube.com/embed/${trailers[0].key}`)
        return `https://www.youtube.com/embed/${trailers[0].key}`;
      } else {
        return "Trailer not found";
      }
}
