import React, { FC } from 'react';

interface ISearchPost {
    search: string,
    setSearch : React.Dispatch<React.SetStateAction<string>>;
}

const SearchPost: FC<ISearchPost> = ({search, setSearch}) => {
    
  return (
      <input 
      type="text" 
      placeholder='Search'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}

      />
  );
};

export default SearchPost;