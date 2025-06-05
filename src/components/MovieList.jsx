
import Movie from "./Movie";

const MovieList=({title,film})=>{

    return(
        <div className="bg-black text-white">
        
<h2 className="py-4 text-lg ">{title}</h2>
        <div className="flex overflow-x-hidden">
        {film && film.length > 0 ? ( film.map((movie,i)=>{
            return <Movie key={movie.imdbID}  film={movie} />
        })) : (<p>Loading Movies........</p>)}
        </div>
        </div>

    )
} 
export default MovieList;