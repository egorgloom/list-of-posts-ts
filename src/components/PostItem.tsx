import React, { FC } from 'react';
import { IPosts} from '../interfaces/interfaces';
import '../App.css';

interface IPostItem {
  post: IPosts,
  deletePost: (id: number)=> void
}

const PostItem: FC<IPostItem> = ({...props} :IPostItem) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong className='post-content-header'>{props.post.id} {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className='post-btn'>
        <button>Open</button>
        <button onClick={()=>props.deletePost(props.post.id)}>Delete</button>
      </div>

    </div>
  );
};

export default PostItem;