import React, { useEffect, useState } from 'react';
import { getPosts } from './API/apiPosts';
import './App.css';
import MyModal from './components/MyModal';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import SearchPost from './components/SearchPost';
import { usePosts } from './hooks/usePosts';
import { IPosts } from './interfaces/interfaces';




function App() {
  const [posts, setPosts] = useState<IPosts[]>([
    { id: 1, title: 'Egor', body: "Fisherman" },
    { id: 2, title: 'Sasha', body: "Fisherman" },
    { id: 3, title: 'Main', body: "team" },
  ])

  const [search, setSearch] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false)
  const searchPosts = usePosts(posts, search);

  // useEffect(()=>{

  // },[])



  return (
    <div className="App">
      <button onClick={()=>setVisible(true)} className='myBtn'>Create</button>
      <SearchPost search={search} setSearch={setSearch} />
      <MyModal 
      visible={visible}
      setVisible={setVisible}
      >
      <PostForm posts={posts} setPosts={setPosts} />
      </MyModal>
     <PostList posts={posts} setPosts={setPosts} searchPosts={searchPosts}/>
    </div>
  );
}

export default App;
