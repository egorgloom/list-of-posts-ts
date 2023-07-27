import React, { FC } from 'react';
import '../App.css';

interface ISearchPost {
    search: string,
    setSearch : React.Dispatch<React.SetStateAction<string>>;
}

const SearchPost: FC<ISearchPost> = ({search, setSearch}) => {
    
  return (
      <input 
      type="text" 
      placeholder='Search...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="myInputSearch"

      />
  );
};

export default SearchPost;