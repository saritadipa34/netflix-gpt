import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
        name:"movies",
        initialState:{
            addMovieList:null
        },
        reducers:{
        addNewMovies:(state,action)=>{
           state.addMovieList=action.payload;
        }
    } 
        }
)
export const {addNewMovies}=movieSlice.actions;

export default movieSlice.reducer;