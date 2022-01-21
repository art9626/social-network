import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});


export const usersAPI = {
  getFollow: (id) => {
    return instance.post(`/follow/${id}`).then(res => res.data);
  },


  getUnfollow: (id) => {
    return instance.delete(`/follow/${id}`).then(res => res.data);
  },


  getUsersData: (pageSize = 10, currentPage = 1, searchStr = '') => {
    return instance.get(`/users?count=${pageSize}&page=${currentPage}&term=${searchStr}`).then(res => res.data);
  },
}