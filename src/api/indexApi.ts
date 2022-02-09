import axios from "axios";

export type OperationResultType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
}

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});