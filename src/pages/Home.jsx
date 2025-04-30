import { FaLaptop } from "react-icons/fa";import Header from "../components/Header";
import { MdDownloadForOffline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import Button from "../components/Button";

const Home=()=>{
  const images=["1","2","3","4","5","6","7","8","9","10"];

    return(
        <div>
          <div className="flex justify-between">
          <Header /> 
</div>
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

            <div className="absolute z-20 top-70 w-150 mx-auto left-0 right-0 ">
            <div className="text-white flex flex-col gap-5 text-xl">
                <h1 className="text-6xl font-bold text-center">Unlimited movies,TV shows and more </h1>
                <p className="font-bold text-center">Starts at ₹149.Cancel at any time.</p>
                <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                <input type="text" placeholder="Email address" className="h-13 w-90  rounded-3xl px-4 border "/>
                <Button className={"bg-red-600 h-13 w-58 py-1 px-10 rounded-3xl ml-2"} text={"Get Started"}/>
            </div>
                        </div>

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
  <MdDownloadForOffline  size={"40px"}/>
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
<div className="min-h-100 w-full flex flex-col gap-5 px-50">
  <h1 className="text-3xl mt-5">Frequently Asked Questions</h1>
  <div className="h-18 w-full rounded-xl text-xl flex items-center justify-between px-5 bg-gray-400">
<p>What is Netflix?</p> <span className="text-4xl">+</span>
  </div>
  <div className="h-18 w-full rounded-xl text-xl flex items-center justify-between px-5 bg-gray-400">
<p>How much does Netflix cost?</p> <span className="text-4xl">+</span>
  </div>
  <div className="h-18 w-full rounded-xl text-xl flex items-center justify-between bg-gray-400 px-5 ">
<p>Where can i watch?</p> <span className="text-4xl">+</span>
  </div>
  <div className="h-18 w-full rounded-xl text-xl flex items-center justify-between px-5 bg-gray-400 ">
<p>How can i cancel?</p> <span className="text-4xl">+</span>
  </div>
  <div className="h-18 w-full rounded-xl text-xl flex items-center justify-between px-5 bg-gray-400">
<p>What can i watch on Netflix?</p> <span className="text-4xl">+</span>
  </div>
  <div className="h-18 w-full rounded-xl text-xl flex items-center px-5 bg-gray-400">
<p>Is Netflix good for kids?</p> <span className="text-4xl">+</span>
  </div>
</div>
<div className="px-65 w-full mx-auto left-0 right-0 content-center">
  <h2 className="my-5 text-lg">Ready to watch? Enter your email to create or restart your membership.</h2>
                <input type="text" placeholder="Email address" className="h-13 w-90  rounded-3xl px-4 border "/>
                <Button className={"bg-red-600 h-13 w-58 py-1 px-10 rounded-3xl ml-2"} text={"Get Started"}/>
            </div>
</div>
           
          </div>
        </div>
    )
}
export default Home;