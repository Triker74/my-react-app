import { Comment } from '../../../entities/Devices/IComments';
import apiClient from '../../../../../shared/api/Interceptors';

export const getComments = async (postId: number): Promise<Comment[]> => {
    try {
        const response = await apiClient.get<Comment[]>(`/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error('Ошибка в getComments:', error);
        return [];
    }
};