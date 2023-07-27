import React, { FC } from 'react';
import { IPost} from '../interfaces/interfaces';

interface IPostItem {
  post: IPost
}

const PostItem: FC<IPostItem> = ({post}) => {
  return (
    <div>
      <p>{post.id}</p>
        <p>{post.title}</p>
        <p> {post.body}</p>
    </div>
  );
};

export default PostItem;