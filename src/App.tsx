import React, { useMemo, useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import SearchPost from './components/SearchPost';
import { usePosts } from './hooks/usePosts';
import {IPosts } from './interfaces/interfaces';



function App() {
  const [posts, setPosts] = useState<IPosts[]>([
    {id:1, title: 'Egor', body: "Fisherman"},
    {id:2, title: 'Sasha', body: "Fisherman"},
    {id:3, title: 'Main', body: "team"},
  ])
  
  const [search, setSearch] = useState<string>('');
const searchPosts = usePosts(posts,search);

  return (
    <div className="App">
      <SearchPost search={search} setSearch={setSearch} />
      <PostForm posts={posts} setPosts={setPosts}/>
      {searchPosts.map((post: IPosts) => <PostItem post={post} key={post.id}/>)}
    </div>
  );
}

export default App;
