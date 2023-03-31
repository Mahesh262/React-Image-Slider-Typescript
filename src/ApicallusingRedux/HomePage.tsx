import React, { useEffect } from 'react';
import {useAppSelector,useAppDispatch} from './hooks'
import { fetchPosts } from './CreatingSlice';
const HomePage = () => {
    const dispatch = useAppDispatch()
      const posts = useAppSelector((state) => state.posts.posts);
    //   const status = useAppSelector((state) => state.posts.status);
    //   const error = useAppSelector((state) => state.posts.error);
         useEffect(() => {
            dispatch(fetchPosts());
          }, [dispatch])
    //   if (status === 'loading') {
    //     return <div>Loading...</div>;
    //   } else if (status === 'failed') {
    //     return <div>{error}</div>;
    //   }
    // dfsdasdsfdfd
  return (
    <div>
    <ul>git 
          {posts.map((post) => (
            (<li key={post.id}>{post.title}</li>)
          ))}
          </ul>
    </div>
  )
}

export default HomePage


