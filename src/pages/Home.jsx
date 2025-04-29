import { FaLaptop } from "react-icons/fa";import Header from "../components/Header";
import { MdDownloadForOffline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const Home=()=>{
  const images=["1","2","3","4","5","6","7","8","9","10"];

    return(
        <div>
          <Header /> 
          <div className="px-10">
        <img src="/home_img.jpg" alt="home" className=" h-screen w-full "  />
          </div>
          <div className="h-80 w-full px-10 mx-auto left-0 right-0">
            <h1 className="text-white text-4xl my-5 font-bold">Trending Now</h1>
            <div className="flex gap-5 w-200vh">
{
  images.map((img,i)=>{
    return <img src={`/img${img}.jpeg`} alt={`img${img}`} key={i} className="h-70 w-45 rounded-2xl" />
  })
}
</div>
<div className="h-90 w-full text-white p-5">
<h1 className="text-4xl font-bold mb-5">More reasons to join</h1>
  <div className="flex gap-4">
<div className="h-60 w-72 p-4 break-words border rounded-xl ">
  <h2 className="font-bold text-xl mb-2">Enjoy on your TV</h2>
  <p>Watch on your smart TVs,PlayStation,Xbox,ChromeCast,Apple Tv,Blu-ray,players and more.</p>
  <FaLaptop size={"40px"}/>
</div>
<div className="h-60 w-70 p-4 border rounded-xl">
  <h2 className="font-bold text-xl mb-2">Download your shows to watch offline</h2>
  <p>Save your favorites easily and always have something to watch.</p>
  <MdDownloadForOffline textAlign={"right"} size={"40px"}/>
</div>
<div className="h-60 w-70 p-4 border rounded-xl">
  <h2 className="font-bold text-xl mb-2"> Watch everywhere</h2>
  <p>Strem unlimited movies and TV shows on your phone,tablet,laptop and TV.</p>
</div>
<div className="h-60 w-70 p-4 border rounded-xl">
<h2 className="font-bold text-xl mb-2">Create profile for kids</h2>
<p>Send kids on adventures with their favorite characters in a space made just for them-free with your membership.</p>
<TiMessages />
</div>
</div>
</div>
           
          </div>
        </div>
    )
}
export default Home;