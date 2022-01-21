import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});


export const securityAPI = {
  getCaptchaUrl: () => {
    return instance.get('/security/get-captcha-url').then(res => res.data);
  },
}