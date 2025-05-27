
import Button from "./Button";

const VideoTitle=({Title})=>{
    return(
        <div>
<p className="text-5xl text-white font-semibold">{Title}</p>
<Button className={"h-10 w-20 bg-gray-400 mr-10 text-white"} text={"▶️Play"} />
<Button  className={"h-10 w-30 bg-gray-400 text-white"} text={"MoreInfo"}/>
        </div>
    )  
}
export default VideoTitle;