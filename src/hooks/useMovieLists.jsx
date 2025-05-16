import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { addNewMovies } from "../utils/movieSlice";


const movieLists=()=>{
        const dispatch=useDispatch();
    const getMovieData=async()=>{
        const api_Key=import.meta.env.VITE_API_KEY;
        try{
const response=await fetch(`https://www.omdbapi.com/?apikey=${api_Key}&s=batman&type=movie`)
const data=await response.json();
dispatch(addNewMovies(data));
console.log(data);
        } catch (error){
            console.log(error);
        }
    }
useEffect(()=>{
getMovieData();
},[]);
}
export default movieLists;