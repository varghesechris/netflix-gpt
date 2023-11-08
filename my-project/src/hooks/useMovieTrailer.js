import React, { useEffect }from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTralierKey } from '../utils/movieSlice';

const useMovieTrailer = (movieid) => {
    const trailerDispatch = useDispatch();
  
console.log(movieid,"id");
  const getMovieVideo = async () => {

    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US", API_OPTIONS);

    const json = await data.json();
    console.log(json,"regu");
    const filtertrailer = json.results.filter((video => video.type === "Trailer"));
    const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];
    
    trailerDispatch (addTralierKey (trailer));

   

  };
  useEffect(() => {

    getMovieVideo();
  }, [])
 
}

export default useMovieTrailer