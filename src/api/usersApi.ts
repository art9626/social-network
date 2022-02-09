import { UserType } from "../redux/usersPageReducer";
import { instance, OperationResultType } from './indexApi';

type GetUsersDataResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
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