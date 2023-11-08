import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice ({
name :"movies",
initialState:{
    nowPlayingMovies : null,
    nowTralierKey:null,
},
reducers : {
    addNowPlayingMovies :(state, action)=>{
        state.nowPlayingMovies = action.payload
    },
    addTralierKey :(state, action)=>{
        state.nowTralierKey=action.payload
    }
}

});


export const {addNowPlayingMovies,addTralierKey} = moviesSlice.actions;
export default moviesSlice.reducer;