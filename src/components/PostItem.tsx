import React, { FC } from 'react';
import { IPosts} from '../interfaces/interfaces';
import '../App.css';

interface IPostItem {
  post: IPosts
}

const PostItem: FC<IPostItem> = ({post}) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong className='post-content-header'>{post.id} {post.title}</strong>
        <p>{post.body}</p>
      </div>
      <div className='post-btn'>
        <button>add</button>
        <button>delete</button>
      </div>

    </div>
  );
};

export default PostItem;