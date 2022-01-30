import axios from "axios";
import { PhotosType, UserProfileType } from "../redux/profilePageReducer";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});

export type OperationResultType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
}




export const profileAPI = {
  getProfileData: (id: number | null) => {
    return instance.get<UserProfileType>(`/profile/${id}`).then(res => res.data);
  },

  getStatus: (id: number) => {
    return instance.get<string>(`/profile/status/${id}`).then(res => res.data);
  },

  setStatus: (status: string) => {
    return instance.put<OperationResultType>('/profile/status', { status }).then(res => res.data);
  },

  setProfilePhoto: (photo: File) => {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put<OperationResultType<{ photos: PhotosType }>>('/profile/photo', formData, {headers: {'Content-Type' : 'multipart/form-data'}}).then(res => res.data);
  },

  setProfileData: (data: UserProfileType) => {
    return instance.put<OperationResultType>('/profile', data).then(res => res.data);
  },
}