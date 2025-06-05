
const Movie=({film})=>{

    return(
        <div> 
          <img className="h-50 w-50" src={film.Poster} alt="poster" /> 
        </div>
    )
}
export default Movie;