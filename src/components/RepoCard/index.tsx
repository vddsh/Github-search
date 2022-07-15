import React from 'react';
import {IRepo} from '../../models/models';
import {useActions} from '../../hooks/actions';

const RepoCard = ({repo}: { repo: IRepo }) => {

  const {addFavourite, removeFavourite} = useActions()

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    addFavourite(repo.html_url)
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-500 transition-all">
      <a href={repo.html_url} target='_blank'>
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p>
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold mr-2">{repo.watchers}</span>
        </p>
        <button className='py-2 px-4 bg-pink-200 rounded hover:shadow-md transition-all' onClick={addToFavourite}>Add to Favourite</button>
      </a>
    </div>
  );
};

export default RepoCard;
