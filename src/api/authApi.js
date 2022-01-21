import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});


export const authAPI = {
  getAuthUserData: () => {
    return instance.get('/auth/me').then(res => res.data);
  },

  login: (formData) => {
    return instance.post('/auth/login', formData).then(res => res.data);
  },

  logout: () => {
    return instance.post('/auth/logout');
  },
}