import { Post } from '../../entities/Devices/IPost';
import apiClient from '../../../../shared/api/Interceptors';

export const getPosts = async (): Promise<Post[]> => {
    try {
        const response = await apiClient.get<Post[]>('/posts');
        return response.data;
    } catch (error) {
        console.error('Ошибка в getPosts:', error);
        return [];
    }
};