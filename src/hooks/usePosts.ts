import { useMemo } from "react"
import { IPosts } from "../interfaces/interfaces"


export const usePosts = (posts: IPosts[], search: string) => {
    
    const searchPosts = useMemo(()=> {
      return posts.filter(post => post.title?.toLowerCase().includes(search))
    }, [posts, search])
    return searchPosts
  
  }