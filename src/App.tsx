import React, { useState } from 'react';
import './App.css';
import { IPost, IPosts } from './interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [post, setPost] = useState<Partial<IPost>>({title:'', body: ''});


  const [posts, setPosts] = useState<IPosts[]>([])

  const addNewPost = (event: React.FormEvent): void => {
    event.preventDefault();


    const newPost = {
      id: uuidv4,
      title: post.title,
      body: post.body
    }

    setPosts([...posts, newPost]);
    setPost({title:"", body:""})
    console.log(posts)
  }

  return (
    <div className="App">
      <form onSubmit={addNewPost}>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
        />
        <input
          type="text"
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
        />
        <button>Add</button>
      </form>


    </div>
  );
}

export default App;
