import React, { FC, useState } from 'react';
import { IPost, IPosts } from '../interfaces/interfaces';

interface IPostForm {
    posts: IPosts[],
    setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
}

const PostForm: FC<IPostForm> = ({posts, setPosts}) => {
    const [post, setPost] = useState<Partial<IPost>>({title:'', body: ''});

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
  );
};

export default PostForm;