import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { json } from 'react-router-dom';

const useNowPlayingMovies = (id)=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    
      const movieData = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS
      );
      const  json = await movieData.json();
      console.log(json.results);
      dispatch (addNowPlayingMovies (json.results));
    };
    
    //
    useEffect (() => {
      getNowPlayingMovies();
      
    },[])
}

export default useNowPlayingMovies;