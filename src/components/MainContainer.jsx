import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
const movie=useSelector(store=>store.movie.addMovieList);
if(!movie) return;
const mainMovie=movie.Search[0];
const {Poster,Title,imdbID}=mainMovie;

console.log(mainMovie)
    return(
        <div>
            <VideoTitle Poster={Poster} Title={Title}  />
            <VideoBackground movieId={imdbID}/>
        </div>
    )
}
export default MainContainer;