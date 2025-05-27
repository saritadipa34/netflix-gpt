import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import movieLists from "../hooks/useMovieLists";
const Browse=()=>{
movieLists();
    
    return(
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}
export default Browse;