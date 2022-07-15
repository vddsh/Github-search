import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-800 text-white font-sans font-bold'>
      <h3>Github search</h3>
      <span>
        <Link to='/' className='mr-2'>Home page</Link>
        <Link to='/favourites'>Favourites</Link>
      </span>
    </nav>
  );
};

export default Navigation;
