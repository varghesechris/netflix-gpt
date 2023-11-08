import React from 'react';
import Header from './Header';

import { json } from 'react-router-dom';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';

const Browse = () => {

 useNowPlayingMovies();


  return (
    <div><Header/>
    <MainContainer/>
    </div>
    

  )
}

export default Browse