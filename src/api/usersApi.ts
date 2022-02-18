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


  getUsersData: (count = 10, page: number, term: string, friend: boolean | null ) => {
    // return instance.get(`/users?count=${pageSize}&page=${currentPage}&term=${searchStr}`).then(res => res.data);   
    return instance.get<GetUsersDataResponseType>(`/users`, { params: {count, page, term, friend} }).then(res => res.data);
  },
}