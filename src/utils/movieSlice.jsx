import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
        name:"movies",
        initialState:{
            addMovieList:null,
            addTrailerList:{}
        },
        reducers:{
        addNewMovies:(state,action)=>{
           state.addMovieList=action.payload;
        },
        addTrailers:(state,action)=>{
            // state.addTrailerList=action.payload;
            const{movieId,url}=action.payload;
            state.addTrailerList[movieId]=url;
        }
    } 
        }
)
export const {addNewMovies,addTrailers}=movieSlice.actions;

export default movieSlice.reducer;