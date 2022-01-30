import { OperationResultType } from './profileApi';
import axios from "axios";
import { UserType } from "../redux/usersPageReducer";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});

type GetUsersDataResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
}


export const usersAPI = {
  getFollow: (id: number) => {
    return instance.post<OperationResultType>(`/follow/${id}`).then(res => res.data);
  },


  getUnfollow: (id: number) => {
    return instance.delete<OperationResultType>(`/follow/${id}`).then(res => res.data);
  },


  getUsersData: (pageSize = 10, currentPage = 1, searchStr = '') => {
    // return instance.get(`/users?count=${pageSize}&page=${currentPage}&term=${searchStr}`).then(res => res.data);   
    return instance.get<GetUsersDataResponseType>(`/users`, { params: {count: pageSize, page: currentPage, term: searchStr} }).then(res => res.data);
  },
}