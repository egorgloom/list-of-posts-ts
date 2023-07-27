import React, { FC, useState } from 'react';
import { IPosts } from '../interfaces/interfaces';
import '../App.css';

interface IPostForm {
    posts: IPosts[],
    setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
}

const PostForm: FC<IPostForm> = ({posts, setPosts}) => {
    const [post, setPost] = useState<Partial<IPosts>>({title:'', body: ''});

    const addNewPost = (event: React.FormEvent): void => {
        event.preventDefault();
        const newPost = {
          id: Date.now(),
          title: post.title,
          body: post.body
        }
        setPosts([...posts, newPost]);
        setPost({title:"", body:""})
      }
  return (
    <form onSubmit={addNewPost} className="createPost">
    <input
      type="text"
      value={post.title}
      onChange={(e) => setPost({...post, title: e.target.value})}
      className="myInput"
    />
    <input
      type="text"
      value={post.body}
      onChange={(e) => setPost({...post, body: e.target.value})}
      className="myInput"
    />
    <button className='addBtn'>Add</button>
  </form>
  );
};

export default PostForm;