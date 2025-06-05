

import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useFetchMovies from "../hooks/useFetchMovies";

const SecondaryContainer=()=>{
    const api_Key=import.meta.env.VITE_API_KEY;
useFetchMovies("HarryPotterMovies", `https://www.omdbapi.com/?s=harry&apikey=${api_Key}`);
useFetchMovies("SpidermanMovies", `https://www.omdbapi.com/?s=spiderman&apikey=${api_Key}`);
useFetchMovies("FastandFuriousMovies",`https://www.omdbapi.com/?s=fast&apikey=${api_Key}`);
useFetchMovies("FinalDestinationMovies", `https://www.omdbapi.com/?s=final&apikey=${api_Key}`);

const movies=useSelector((state)=>state?.movie.addMoviesByCategoryList || {})

    return(
        <div>
        <MovieList title={"Harry Movies"} film={movies.HarryPotterMovies}/>
        <MovieList title={"Spiderman Movies"} film={movies.SpidermanMovies} />
        <MovieList title={"Final Destination"} film={movies.FinalDestinationMovies}/>
        <MovieList title={"Fast & Furious"} film={movies.FastandFuriousMovies}/>
        </div>
    )
}
export default SecondaryContainer;