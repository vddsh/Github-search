import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import FavouritesPages from './Pages/FavouritesPages';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="favourites" element={<FavouritesPages/>}/>
      </Routes>
    </>
  );
}

export default App;
