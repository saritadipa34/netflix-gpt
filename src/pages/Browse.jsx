import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useMovieLists from "../hooks/useMovieLists";

const Browse=()=>{
useMovieLists();
    
    return(
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}
export default Browse;