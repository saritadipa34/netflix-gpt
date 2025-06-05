import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addMoviesByCategory } from "../utils/movieSlice";

const useFetchMovies=(category,url)=>{
         const dispatch=useDispatch();
   useEffect(()=>{
const getFetchMovies=async()=>{
    try{
const response=await fetch(url);
const data=await response.json();
dispatch(addMoviesByCategory({category,data:data.Search}))

    }  catch (error){
        console.log(error.message);
    }
}
getFetchMovies();
   },[category,url,dispatch]);
}
export default useFetchMovies;