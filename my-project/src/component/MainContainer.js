import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import Header from './Header';
import VideoTitle from './VideoTitle';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'


const MainContainer = () => {
    const movies = useSelector ((store)=> store.movies?.nowPlayingMovies);

    if (!movies ) return;
    const mainMovies = movies[0];
    console.log(mainMovies);
    const {original_title, overview,id} = mainMovies;
    

  return (
   
    <div>
    <VideoBackground movieid={id}/>
    <VideoTitle overview={overview} title={original_title}/>

    </div>
  )
}

export default MainContainer