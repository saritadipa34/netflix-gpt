
import Button from "./Button";

const VideoTitle=({Title,Poster})=>{
    return(
    <div className="absolute z-20 w-screen aspect-video">
<p className="text-5xl text-white font-semibold mt-30">{Title}</p>
<img src={Poster} alt="poster" className="h-40 w-40 mb-10" />
<Button className={"h-10 w-20 bg-gray-400 mr-10 text-white"} text={"▶️Play"} />
<Button  className={"h-10 w-30 bg-gray-400 text-white"} text={"MoreInfo"}/>
        </div>
    )  
}
export default VideoTitle;