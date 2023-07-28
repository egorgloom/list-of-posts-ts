import React, { FC } from 'react';
import { IPosts } from '../interfaces/interfaces';
import PostItem from './PostItem';
import '../App.css';

interface IPostList {
    posts: IPosts[],
    searchPosts: IPosts[],
    setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
}

const PostList: FC<IPostList> = ({...props}:IPostList) => {

    const deletePost = (id: number):void => {
        const afterDeletePost = props.posts.filter(post=> post.id !== id)
        props.setPosts(afterDeletePost)
      }

    if(!props.posts.length) {
        return <div className='not-found'>Not Found...</div>
    }
  return (
    <div>
        {props.searchPosts.map((post: IPosts) => <PostItem post={post} key={post.id} deletePost={deletePost}/>)}
    </div>
  );
};

export default PostList;