import React, {useEffect, useState} from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery} from '../../store/github/github.api';
import useDebounce from '../../hooks/Debounce';
import RepoCard from '../../components/RepoCard';

const HomePage = () => {
  const [search, setSearch] = useState<string>('');
  const [dropDown, setDropDown] = useState<boolean>(false);
  const debounced = useDebounce(search);
  const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [fetchRepos, {isLoading: isRepoLoading, data: repos}] = useLazyGetUserReposQuery();


  useEffect(() => {
    setDropDown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleClick = (username: string) => {
    fetchRepos(username);
    setDropDown(false);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong</p>}

      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for username"
        />
        {dropDown && <ul
          className="list-none absolute top=[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
          {isLoading && <p className="text-center">Loading</p>}
          {data?.map(user => (
            <li key={user.id}
                onClick={() => handleClick(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer">{user.login}</li>
          ))}
        </ul>}
        <div className='container'>
          {isRepoLoading && <p>Repos Loading...</p>}
          {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
