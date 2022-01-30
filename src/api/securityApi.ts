import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});

type GetCaptchaResponseType = {
  url: string;
}


export const securityAPI = {
  getCaptchaUrl: () => {
    return instance.get<GetCaptchaResponseType>('/security/get-captcha-url').then(res => res.data);
  },
}