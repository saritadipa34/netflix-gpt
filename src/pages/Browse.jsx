import {  useEffect } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addNewMovies } from "../utils/movieSlice";

const Browse=()=>{
const dispatch=useDispatch();
    const getMovieData=async()=>{
        const api_Key=import.meta.env.VITE_API_KEY;
        try{
const response=await fetch(`https://www.omdbapi.com/?apikey=${api_Key}&s=batman&type=movie`)
const data=await response.json();
dispatch(addNewMovies(data));
        } catch (error){
            console.log(error);
        }
    }
useEffect(()=>{
getMovieData();
},[]);
    
    return(
        <div className="flex">
            <Header />
        </div>
    )
}
export default Browse;