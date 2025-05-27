import { useEffect } from "react";
const VideoBackground=({movieId})=>{

    useEffect(()=>{
        const apiKey=import.meta.env.VITE_API_KEY;
        const getMovieTrailer=async(movieId)=>{
            const response=await fetch( `https://www.omdbapi.com/?i=${encodeURIComponent(movieId)}&apikey=${apiKey}`);
            const data=await response.json();
            console.log(data);
        }
        getMovieTrailer("tt1877830");
    },[movieId]);

 const getYouTubeEmbedUrl = (movieId) =>
    `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent( movieId + " trailer")}`;

    return(
        <div>
            videobackground
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/NLOp_6uPccQ?si=MQo76T3rJhjqpELc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
export default VideoBackground; 