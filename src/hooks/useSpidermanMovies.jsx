import { useEffect } from "react"
import { useDispatch } from "react-redux";

const useSpiderman=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const api_Key=import.meta.env.VITE_API_KEY;
const getSpiderman=async()=>{
    try{
    const response=await fetch(`https://www.omdbapi.com/?apikey=${api_Key}&s=spider+man&type=movie`);
    const data=await response.json();
    dispatch(addSpidermanMovies(data));
    console.log(data);
    } catch (error){
        console.log(error.message);
    }
}
getSpiderman();
    },[])
}
export default useSpiderman;