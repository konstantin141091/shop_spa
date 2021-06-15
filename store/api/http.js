import axios from 'axios'

// TODO здесь нужно прописать адрес сервера api
const APP_URL = 'http://laravel.local/';
const instance = axios.create({
  baseURL: APP_URL,
  timeout: 10000,
});
export default instance
