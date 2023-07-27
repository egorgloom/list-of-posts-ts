import React, { useState } from 'react';
import './App.css';
import MyModal from './components/MyModal';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import SearchPost from './components/SearchPost';
import { usePosts } from './hooks/usePosts';
import { IPosts } from './interfaces/interfaces';



function App() {
  const [posts, setPosts] = useState<IPosts[]>([
    { id: 1, title: 'Egor', body: "Fisherman rsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj" },
    { id: 2, title: 'Sasha', body: "Fisherman" },
    { id: 3, title: 'Main', body: "team" },
  ])

  const [search, setSearch] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false)
  const searchPosts = usePosts(posts, search);

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
      {searchPosts.map((post: IPosts) => <PostItem post={post} key={post.id} />)}
    </div>
  );
}

export default App;
