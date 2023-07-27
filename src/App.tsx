import React, { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import {IPost, IPosts } from './interfaces/interfaces';



function App() {
  const [posts, setPosts] = useState<IPosts[]>([])

  return (
    <div className="App">
      <PostForm posts={posts} setPosts={setPosts}/>
      {posts.map((post: IPost) => <PostItem post={post} key={post.id}/>)}



    </div>
  );
}

export default App;
