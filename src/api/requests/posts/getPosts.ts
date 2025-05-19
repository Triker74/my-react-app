import axios from 'axios';
import { Post } from '../components/Post';

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};