import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
        name:"movies",
        initialState:{
            addMovieList:null,
            addTrailerList:{},
            addMoviesByCategoryList:{}
        },
        reducers:{
        addNewMovies:(state,action)=>{
           state.addMovieList=action.payload;
        },
addMoviesByCategory:(state,action)=>{
const {category,data}=action.payload;
state.addMoviesByCategoryList[category]=data;
},
        addTrailers:(state,action)=>{
            // state.addTrailerList=action.payload;
            const{movieId,url}=action.payload;
            state.addTrailerList[movieId]=url;
        }
    } 
        }
)
export const {addNewMovies,addTrailers,addMoviesByCategory}=movieSlice.actions;

export default movieSlice.reducer;