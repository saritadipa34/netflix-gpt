import Header from "../components/Header";
import movieLists from "../hooks/useMovieLists";
const Browse=()=>{
movieLists();
    
    return(
        <div className="flex">
            <Header />
        </div>
    )
}
export default Browse;