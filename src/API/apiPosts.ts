import axios from "axios"
import { IPosts } from '../interfaces/interfaces';


type TPosts = {
    data: IPosts[]
}
  export async function getPosts() {
    const response = await axios.get<TPosts>('https://jsonplaceholder.typicode.com/posts');
    return response.data
}
