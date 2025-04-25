import axios from 'axios';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};