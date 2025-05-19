import axios from 'axios';
import { Comment } from './Comments';

export const getComments = async (postId: number): Promise<Comment[]> => {
    const response = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response.data;
};