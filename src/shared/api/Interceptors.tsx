import axios, { AxiosInstance, AxiosError } from 'axios';
import { message } from 'antd';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
});

apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        console.log('Перехватчик сработал:', error.message);
        if (error.response?.status === 404) {
            message.error('Ошибка: Запрошенный ресурс не найден. Проверьте правильность URL.');
        } else if (error.response?.status === 504) {
            message.error('Ошибка 504: Таймаут шлюза. Проверьте подключение к интернету или попробуйте позже.');
        } else if (!error.response && (!navigator.onLine || error.code === 'ERR_NETWORK')) {
            message.error('Ошибка: Нет подключения к интернету. Проверьте ваше соединение.');
        } else {
            message.error('Произошла ошибка при выполнении запроса.');
        }
        return Promise.reject(error);
    }
);

export default apiClient;