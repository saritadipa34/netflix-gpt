import Header from "../components/Header";

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
            <div className="flex gap-5">
{
  images.map((img,i)=>{
    return <img src={`/img${img}.jpeg`} alt={`img${img}`} key={i} img={img} className="h-70 w-45 rounded-2xl" />
  })
}
            </div>
          </div>
        </div>
    )
}
export default Home;