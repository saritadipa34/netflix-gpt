import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailers } from "../utils/movieSlice";

const VideoBackground=({movieId})=>{
    const dispatch=useDispatch();
    const trailerUrl=useSelector((state)=>state.movie.addTrailerList[movieId])

    useEffect(()=>{
        const omdbapiKey=import.meta.env.VITE_API_KEY;
        const youTubeAPI=import.meta.env.VITE_YOUTUBE_KEY;
    
        const getMovieTitle=async(movieId)=>{
            const response=await fetch(`https://www.omdbapi.com/?i=${encodeURIComponent(movieId)}&apikey=${omdbapiKey}`);
            const omdbData=await response.json();
            console.log(omdbData);
            const query=(`${omdbData.Title}`);


const youtubeUrl=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&key=${youTubeAPI}&type=video`)
 const youtubeData=await youtubeUrl.json();
 
const videoId=youtubeData.items[0].id.videoId;
 const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

 console.log(youtubeData)
        dispatch(addTrailers({movieId, url:youtubeEmbedUrl}))
        console.log(omdbData.Title); 
        }
   
        getMovieTitle(movieId); 
    },[movieId,dispatch]);


    return(
        <div className="relative z-10">
            { trailerUrl ? (<iframe src={trailerUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "></iframe>):
            (<p>Loading.....</p>)
            }
        </div>
    )
}
export default VideoBackground; 