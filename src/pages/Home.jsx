import Header from "../components/Header";

const Home=()=>{
    return(
        <div>
          <Header /> 
          <div className="px-10">
        <img src="/home_img.jpg" alt="home" className=" h-screen w-full "  />
          </div>
         
        </div>
    )
}
export default Home;