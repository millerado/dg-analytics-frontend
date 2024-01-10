import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Player from '../pages/Player';

//make a react component which takes in a prop called playerID
function Main(props) {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Player />} />
      </Routes>
    </div>
  );
}

export default Main;
//this component will make a fetch request to the backend
//the backend will use axios and cheeiro to scrape the PDGA website
//the backend will return the data to the frontend
//the frontend will display the data
//the data will be a list of tournaments played by the player
//each tournament will have a link to the tournament page
